type PropsParams = {
    params: {
        id: string;
    };
    searchParams: any
};


export default function Detail(props: PropsParams) {
    console.log("This is props: ", props)
    console.log(props.searchParams.productName)
	return <div className='h-screen grid place-content-center text-6xl'>{props.params.id}</div>;
}
