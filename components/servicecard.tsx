import { Gift } from 'lucide-react';

type props =
    {
        icon: any;
        head: string;
        des: string

    }

export const ServiceCard = ({
    icon,
    head,
    des

}: props) =>{
    return(
        <div className='gap-y-4 flex-col flex items-center text-center'> 
                    {icon}
                    <h1 className='text-2xl'>{head}</h1>
                    <p className='text-center text-[#767676]'>{des}</p>
        </div>
    )
}