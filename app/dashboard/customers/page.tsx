import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
    return (
    <><h1 className={`${lusitana.className} text-2xl font-bold text-black-700`}> Страница клиентов </h1>
    <p className={`${lusitana.className} text-lg font-normal text-black-400`}>Обычный шрифт</p></>
    );
}