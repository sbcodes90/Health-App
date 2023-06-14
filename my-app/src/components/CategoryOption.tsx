
interface OptionProps {
    description?: string;
    title?: string;
    image?: string;
}

const CategoryOption = (props: OptionProps) => {
   const { description, title, image } = props;

    return (
       <>         
            <div className="mx-auto max-w-sm overflow-hidden rounded-sm bg-white shadow py-8">
            <img src={image} className="aspect-video w-full object-cover" alt="" />
            <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-500">{description}</p>
                
            </div>
        </div>     
  </>
    )
}

export default CategoryOption