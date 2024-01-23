function Card({data}) {
    return (
        <article className="bg-white cursor-pointer w-56 h-56 rounded-lg shadow-md">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data?.image} alt={data.title} />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" type="button">+</button>
            </figure>
            <p className="flex justify-between mx-2">
                <span className="text-sm font-light truncate mr-2">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </article>
    );
}

export { Card };