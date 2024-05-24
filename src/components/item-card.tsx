import Image from "next/image"; 
interface Cat {
    name: string,
    imgCat: string
}

function ItemCard ({name, imgCat}: Cat) {
    return (
        <div className=" ">
            <Image className=""
            src={imgCat}
            alt={name}
            width={200}
            height={200}
            />
            <h2 className="text-xl font-bold">{name}</h2>
        </div>
    )
}

export default ItemCard 