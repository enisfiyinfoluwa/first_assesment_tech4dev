// Create two classes

//  ProductService Class and a private method with fetch functionality
// Create 3 other methods, getproductByID and deleterProductBYID

class ProductService {
    #handlePromise= async({url, method ="GET", body=null}) => {
        const response = await fetch (`https://fakestoreapi.com/${url}`, {method, body: body? JSON.stringify(body):null,} )
        return await response.json()

    }


    getProducts = async () => {
        const response = await this.#handlePromise({url:"products"});
        console.log(response)
        return response
    }
    
    getProductById = async (id) => {
        const response = await this.#handlePromise({url:`products/${id}`});
        console.log(response)
        return response
    }

    deleteProductById = async (id) => {
        const response = await this.#handlePromise({url:`product/${id}`, method:"DELETE", })
        console.log(response)
        return response
    }   

}


// const productService = new ProductService()
// console.log(await productService.getProductById(7))



class Product {
    constructor({id,title, price, description,category, image, rating}){
        this.id = id
        this.title= title;
        this.price= price;
        this.description= description;
        this.category = category;
        this.image= image;
        this.rating= rating;
    }

}

const product= new Product(
    {
        id: 3,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            "rate": 3.9,
            "count": 120
        }
    }
)


console.log(product)

export {ProductService,Product}



//Product class
//Create a constructor
//