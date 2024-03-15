import { CardWhite, audi, cardBackground, document, money } from "@/public";
import Image from "next/image";
import React from "react";
import Card from "../FirstPage/Card";
import Accordion from "./Accordion";

export default function MainSecond() {
    return (
        <div>
            {/* for moto  */}
            <div className="SecondHero flex items-center justify-evenly md:flex-row flex-col md:mt-0 ">
                <div className="flex gap-8  flex-col md:justify-start  justify-center md:w-[600px] Second_Texts">
                    <h1 className="text-[28px] font-bold text-white">
                        Работая с нами Вы сохраняете все преимущества водителя такси
                    </h1>
                    <div className="flex items-center gap-5">
                        <div className="w-[20px] h-[20px] rounded-full bg-green-500"></div>
                        <h1 className="md:w-[500px]">
                            Все, что нужно это загран паспорт и права (если работав доставке
                            на автомобиле)
                        </h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-[20px] h-[20px] rounded-full bg-green-500"></div>
                        <h1 className="md:w-[500px]">
                            Мы предоставляем автомобильные и ручные термосумки
                        </h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-[20px] h-[20px] rounded-full bg-green-500"></div>
                        <h1 className="md:w-[500px]">
                            Возможность работать как на автомобиле или велосипедеза пределами
                            компании.
                        </h1>
                    </div>
                    <div className="flex items-center gap-10">
                        <button className="text-white font-bold bg-gray-600  h-[50px] w-[160px] p-2 text-[18px] rounded-full">
                            Консультация
                        </button>
                        <button className="text-white font-bold">Узнать больше</button>
                    </div>
                </div>
                <Image src={audi} alt="audi" width={600} />
            </div>

            {/* for cards  */}
            <div className="flex items-center justify-center flex-col SecondMain md:mt-0">
                <h1 className="text-[40px] text-white font-bold">
                    Преимущества для курьеров:
                </h1>
                <div className="flex items-center justify-center flex-wrap mt-10 md:w-[900px] gap-10 card_parent ">
                    <Card
                        img={money}
                        image={cardBackground}
                        text={"Наши лучшие курьеры получаютот 300 злотых в день"}
                    />
                    <Card
                        img={money}
                        image={cardBackground}
                        text={"Рекомендованный партнер  Uber Eats, Bolt Food"}
                    />
                    <Card
                        img={money}
                        image={cardBackground}
                        text={"Техническая поддержка 24/7 в онлайн-режиме"}
                    />
                    <Card
                        img={document}
                        image={CardWhite}
                        text={"Помощь со всеми нужными документами для работы"}
                    />
                    <Card
                        img={document}
                        image={CardWhite}
                        text={"До 2-ух рабочих дней подключения на флот курьера"}
                    />
                    <Card
                        img={document}
                        image={CardWhite}
                        text={"Являемся единственным гарантом выплат на рынке"}
                    />
                </div>
            </div>

            {/* for accordion  */}
            <div className="Accordion flex items-center justify-center flex-col">
                <h1 className="text-white text-[40px] font-bold mb-16">Частые вопросы</h1>
                <div className="join join-vertical w-[80%] rounded-2xl">
                    <Accordion title={'Какие требования к работе курьером?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                    <Accordion title={'Обязателен ли автомобиль для работы в доставке?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                    <Accordion title={'Где мне взять сумку для доставки?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                    <Accordion title={'Сколько я могу заработать в доставке?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                    <Accordion title={'Где и когда я могу начинать выполнять заказы?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                </div>
            </div>
        </div>
    );
}
