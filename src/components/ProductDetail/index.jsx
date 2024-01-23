import { XCircleIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
 return (
    <aside className="w-[360px] h-[calc(100vh-68px)] flex flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white">
        <article className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <XCircleIcon className="h-6 w-6 text--black" />
        </article>
    </aside>
 );
}

export { ProductDetail };