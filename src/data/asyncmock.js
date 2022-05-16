import spain from '../images/spain.png'
import guadalest from '../images/guadalest.png'
import venice from '../images/venice.png'
import beach from '../images/beach.png'
import drone from '../images/drone.png'
import venice2 from '../images/venice2.jpg'
import venice3 from '../images/venice3.jpg'
import drone2 from '../images/drone2.jpg'

export const products = [
    {stock: 10, id: 1, title:'Guadalest', price:'29,90 €', pictureUrl: guadalest},    
    {stock: 10, id: 2, title:'Spain', price:'36,30 €', pictureUrl: spain},
    {stock: 10, id: 3, title:'Venice', price:'27,50 €', pictureUrl: venice },
    {stock: 10, id: 4, title:'Beach', price:'38,50 €', pictureUrl: beach },
    {stock: 10, id: 5, title:'Drone', price:'42,70 €', pictureUrl: drone },
    {stock: 10, id: 6, title:'Canals', price:'44,90 €', pictureUrl: venice2 },
    {stock: 10, id: 7, title:'Venice', price:'32,50 €', pictureUrl: venice3 },
    {stock: 10, id: 8, title:'Drone Beach', price:'55,50 €', pictureUrl: drone2 },
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}


