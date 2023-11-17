import AdminLayout from "@/components/shared/admin-layout"
import { Tabs ,Form , Input , Button,message ,Spin ,Card,Modal ,Select ,Empty ,Skeleton , Pagination ,  Progress} from "antd"
import {FormOutlined ,PlusCircleOutlined ,LoadingOutlined} from  '@ant-design/icons';
import axios from "axios";
import { useState , useEffect } from "react";
import useSWR ,{mutate} from "swr";
import AWS from '@/modules/aws.modules'
const fetcher = async(url)=>{
  try {
    const {data} = await axios.get(url)
    return data
  } 
  catch (error) {
    return error
  }
}
const s3 = new AWS.S3()
const Products = () => {
  const [uploading, setUploading] = useState({
    state: null,
    progress: 0
  })
const [fieldName , setfieldName] = useState(null);
const [fieldValue , setfieldValue] = useState(null);
const [page, setPage] = useState(1);
const {data: products, error: productsErr, isLoading , ...test} = useSWR(`/api/products?page=${page}`,fetcher);
const { data: searches, error: searchesErr, isLoading: searchesLoading } = useSWR(`/api/products/?${fieldName}=${fieldValue}`, fetcher);
const [searchResult ,setSearchReult] = useState(0)
const [activeTab, setActiveTab] = useState(null);
const [loading , setLoading] = useState(false);
const [spin , setSpin] = useState('hidden');
const [item ,setItem]= useState(null);
const [serachType ,setSearchType]= useState('title');
const [form] = Form.useForm();
const handleTabClick = (key) => {
  setActiveTab(key);
};
const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
  setItem(null)
};
const handleCancel = () => {
  setIsModalOpen(false);
  setItem(null)
};
console.log(searchResult);

let renderProducts = ""
if( searchResult == 0)
{
renderProducts = products
console.log(" if exicute");
}
else{
renderProducts = searches
console.log("else exicute");
}

console.log(renderProducts);

useEffect(() => {
  if (isModalOpen && item)
     return form.setFieldsValue(item);
     form.resetFields()
}, [isModalOpen, item, form]);

const handleChange = (value) => {
  setSearchType(value);
};

const productCreate = async (value)=>{
try {
     setLoading(true);
      await axios({
     method  : 'post',
     url : 'http://localhost:3000/api/products',
     data : value
   })
   mutate(`/api/products?page=${page}`)
   message.success('Product added successfully' )
  form.resetFields()
   setIsModalOpen(false);
} 

catch (error) {
message.error(error.message)
}
finally{
setLoading(false)
}
}

const search = async(value)=>{
  for(let key in value){
    setfieldName (key.trim())
    setfieldValue(value[key].trim());
   }
   const {data} = await axios({
    method : 'get',
    url :`/api/products/?${fieldName}=${fieldValue}`
   })
   setSearchReult("")
   setSearchReult(data.data.length);
   mutate(`/api/products/?${fieldName}=${fieldValue}`)
}

const clearSerch =()=>{
  setSearchReult(0)
}


const remove = async(id)=>{
try {
   await axios({
     method : "delete",
     url : `/api/products/${id}`
    })
    mutate(`/api/products?page=${page}`);
    message.success("Product deleted")
    
} 
catch (error) {
  
}
}
const productEdit =  async(value)=>{
  try {
    setLoading(true);
     await axios({
    method  :'put',
    url : `/api/products/${item._id}`,
    data : value
  })
 mutate(`/api/products/?${fieldName}=${fieldValue}`)
  message.success('Product update successfully')
  form.resetFields();
  setItem(null)
  setIsModalOpen(false);
} 

catch (error) {
message.error(error.message)
}
finally{
setLoading(false)
}
}
const edit = async(data)=>{
  
  setItem(data)
  setIsModalOpen(true)
}

const paginate = async(page)=>{
 setPage(page);
 await axios.get(`/api/products?page=${page}`)
 mutate(`/api/products?page=${page}`)
};

const onProductImageUpload = (id , index)=>{
  const input = document.createElement("input")
  input.type = "file"
  input.click()
  input.onchange = async ()=>{
  const file = input.files[0]
  input.remove()
  const uploader = s3.upload({
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
    Key: file.name,
    Body: file,
    ACL: 'public-read'
  })
  uploader.on('httpUploadProgress',({total, loaded})=>{
    const percent = Math.floor((loaded*100)/total)
    setUploading({
      ...uploading,
      state: index,
      progress: percent
    })
  })
  try {
    const {Key} = await uploader.promise()
    await axios.put(`/api/products/${id}`,{image: Key})
    mutate(`/api/products?page=${page}`)
    setUploading({
      state: null,
      progress: 0
    })
  }
  catch(err)
  {
    console.log(err)
  }
  
  }
}
  return (
    <AdminLayout>
         <Tabs activeKey={activeTab} onTabClick={handleTabClick} >
  <Tabs.TabPane
     key="1"
     tab={
      <div className='w-[150px]  px-2 rounded-lg border cursor-pointer shadow-lg bg-gradient-to-bl to-blue-500 from-blue-300'  onClick={showModal} >
      <h1 className='text-white  font-thin'> Add Products</h1>
     <div className='flex justify-between items-center'> <i className='bx bx-store text-4xl text-white' ></i> <h1 className='text-3xl text-white'> 0 </h1></div>
     </div>
     }
   >

{/*Add product */}
  <div > 
  
  </div>

  </Tabs.TabPane>

  <Tabs.TabPane
     key="2"
     tab={
      <div className='w-[150px]  px-2 rounded-lg border cursor-pointer shadow-lg bg-gradient-to-bl to-pink-500 from-pink-300'>
      <div className="flex items-center justify-between"><h1 className='text-white  font-thin'> Show Products</h1> <LoadingOutlined  className={`${spin}`}/></div>
      <div className='flex justify-between items-center'> <i className='bx bx-shopping-bag text-4xl text-white' ></i>  <h1 className='text-3xl text-white'> {products && products.total} </h1></div>
     </div>
     }
   >
    {/*Show product */}
   
  <div className="h-screen"> 
  <div className="flex w-full">
  <Select className="w-24" defaultValue="" onChange={handleChange}>
    <Select.Option value="title" className="capitalize">title</Select.Option>
     <Select.Option value="brand" className="capitalize">brand</Select.Option>
      <Select.Option value="category" className="capitalize">category</Select.Option>
  </Select>
    <Form onFinish={search} className="flex ">
      <Form.Item name={serachType}rules={[{required: true,message: 'Serach atleast one item'}]} >
        <Input placeholder={`Search by ${serachType}`} className="w-48" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit"> Search</Button>
      </Form.Item>
    </Form>
    <Button on onClick={clearSerch}>Clear</Button>
  </div>
  
 {
 loading ? <Skeleton active></Skeleton> : null
 }
<div className="grid md:grid-cols-4 gap-8  ">

{
  renderProducts && renderProducts.data.map((item,index)=>(
      <Card 
      title={<h1 className="capitalize text-white">{item.category}</h1>}
       bordered={true}
       headStyle={{ background:  'linear-gradient(to right, #5394F8, #8BBFFC'}}  key={index} id={item._id}
       cover={
        (uploading.state === index) ? 
        <Progress type="circle" percent={uploading.progress} size={80} /> :
       <img 
       alt="example" 
       src={item.image ? (process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+item.image) : "/upload.png"}
       className="  h-[200px] cursor-pointer" 
       onClick={()=>onProductImageUpload(item._id , index)} 
       />}
       bodyStyle={{overflowX : 'hidden'}}
       hoverable
      
       >
<div className="flex flex-col gap-y-2">
       <p className="capitalize text-sm font-semibold"> title : {item.title}</p>
      <p className="capitalize text-sm font-semibold"> Quantity : {item.qnt}</p>
      <p className="capitalize text-sm font-semibold"> Category : {item.category}</p>
      <p className="capitalize text-sm font-semibold"> price : 	&#8377;{item.price}.00  </p>
      <p className="capitalize text-sm font-semibold"> Discount : 	&#8377;{item.discount}.00  </p>
  
      <div className="float-right"> 
        <i className='bx bx-edit text-2xl cursor-pointer text-blue-600' onClick={()=>{edit(item
          )}} ></i> 
        <i className='bx bx-trash text-2xl cursor-pointer text-red-600' onClick={()=>{remove(item._id)}}></i> 
      </div>
</div>
    </Card>
    ))
  }

</div>

<div className="flex items-center justify-center"> <Pagination page={page} onChange={paginate}  total={products && products.total}  className="fixed bottom-0 "/> </div>
  </div>
  </Tabs.TabPane>
  </Tabs>

  {/* submit form coding */}
  
     <Modal title={!item ? <h1 className="text-2xl">Add Product</h1> : <h1 className="text-2xl">Update Product</h1>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   <Spin spinning={loading} >
   <Form className="flex flex-col gap-y-[-20px] " onFinish={item ? productEdit : productCreate} form={form} >
   <label htmlFor="" className="text-xs text-gray-400">Product title *</label>
    <Form.Item name="title"  rules={[{ required: true,message: 'Product title required'} ]}>
      <Input prefix={<FormOutlined className="text-gray-400" /> } placeholder="Title" type="text" />
    </Form.Item >
    <label htmlFor="" className="text-xs text-gray-400">Product Quantity *</label>
    <Form.Item name="qnt" rules={[{ required: true,message: 'Quantity is required'} ]} >
      <Input  prefix={<i className='bx bx-layer  text-gray-400'></i>} placeholder=" Quantity" type="number" />
    </Form.Item>

    <label htmlFor="" className="text-xs text-gray-400">Product category *</label>
    <Form.Item name="category" rules={[{ required: true,message: 'Product Category required'} ]}>
      <Input prefix={<i className='bx bx-category text-gray-400' ></i>} placeholder="Category" type="type" />
    </Form.Item>
    <label htmlFor="" className="text-xs text-gray-400">Product price *</label>
    <Form.Item name="price" rules={[{ required: true,message: 'Product price required'} ]}>
      <Input prefix={<i className='bx bx-rupee text-gray-400' ></i>} placeholder="Price" type="number"/>
    </Form.Item>
    <label htmlFor="" className="text-xs text-gray-400"> Discount </label>
    <Form.Item name="discount">
      <Input prefix={<i className='bx bx-rupee text-gray-400' ></i>} placeholder="Discount" type="number"/>
    </Form.Item>
    <Form.Item >
    {
      !item &&  <Button htmlType="submit" type="primary" icon={<PlusCircleOutlined />} className={`float-right text-white bg-gradient-to-b to-green-600 from-green-200`}> Add products </Button>
    }

    {
      item &&  <Button htmlType="submit" type="primary" icon={<PlusCircleOutlined />} className={`float-right text-white bg-gradient-to-b to-pink-600 from-pink-200 `}> Update products </Button>
    }
    </Form.Item>
   </Form>
   </Spin>
</Modal>
 </AdminLayout>
  )
}

export default Products
