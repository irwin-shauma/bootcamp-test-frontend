import { useEffect, useState } from 'react'

const Sample = () => {

    const [data, setData] = useState([]) // Ini menggunaakn hook useState

    function addData() {
        setData([1, 2, 3, 4]) // Kalo yang ini bakal mengoverride

        //1
        setData(prevData => {
            return [...prevData, 1, 2, 3, 4]
        })

        //2
        setData([...data, 1, 2, 3, 4])

        //2 set diatas sama, cuma yang pertama itu aman untuk asynch
        // sedangkan yang kedua hanya untuk yang synch
    }

    function parent() {
        // let a = 1234

        useEffect(() => {
            //get users
            //get roles
        }, [])

        useEffect(() => {

        }, [title]) // Ini update



        useEffect(() => {
            return () => {

            }
        }, []) //Ini unmount
        



        // Kalau sekali doang, ini jalan hanya sekali yang di [])

        // const [title, setTitle] = useState('Sample title')

        const onChangeText = (event) => {
            setTitle(event.target.value)
        }

        return (
            <>
                <TitleComponent title={title} onChangeText={onChangeText} />
                <TitleComponent onChangeText={onChangeText} />
            </>
        )
    }

    function TitleComponent({ title = "default value", onChangeText }) { //Destructuring + default value
        return (
            <>
                <h1>{title}</h1>
                <input type="text" onChange={onChangeText} />
            </>
        )
    }
    // function TitleComponent(props) {
    //     return <h1>{props.title}</h1>
    // }

}

export default Sample