import Utils from  '../../services/Utils.js'

const getProducts = async (id)=>{

    const options={
        method:"GET",
        headers:{
            'Content-type':'application/json'

        }

        
    }

    try{
        const response =  await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
        const json = await response.json();
        return json;
    }
   catch(err){
    console.log('Error getting documents', err);
   }
    

}

let PostShow ={

    render: async ()=>{
           
          let request = Utils.parseRequestURL();
          let product = await getProducts(request.id)

            let views =`
            <div>Post show
            <div>${product.id}</div>
            <div>${product.id}</div>
            <div>${product.id}</div>
            <div>${product.id}</div>
            </div>
            `
            return views;
    }

}

export default PostShow