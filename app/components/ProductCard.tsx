
"use client"
import Link from "next/link"

const ProductCard = () => {
  return (
    <div>
       <Link href="users">
        <button className="my-8 flex justify-center items-center btn btn-primary font-extrabold" onClick={() => console.log('click')}>Click</button>
        </Link>
    </div>
  )
}

export default ProductCard