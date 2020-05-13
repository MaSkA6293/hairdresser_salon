import React from 'react';
import { Helmet } from "react-helmet";
import './404.css';

const Page404 = () => {
    return (

        <div className='sorry'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Страница не найдена</title>
                <meta name="description"
                    content="Салон красоты Елена. Наш интерьер." />
                <meta name="Keywords"
                    content="Елена,Парикмахерская Рыбное,Салон красоты Рыбное,Салон красоты, Парикмахерская"></meta>
            </Helmet>
            Sorry!  Page not found. <br />Error 404...
        </div>

    )
}

export default Page404;
