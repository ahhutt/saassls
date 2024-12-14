import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../utils/accordion';
import './valvo.css';

const Valvo = () => {
    return (
        <section className='v-wrapper'>
            <div className="padding innerWidth v-container">
                <div className="image-container">
                    <img src='./value.png' alt='' />
                </div>
            </div>

            <div className="flexColStart padding innerWidth v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value We Give to You</span>
                <span className="secondrayText">
                    We always ready to help by providing the best services for you
                    <br />
                    We believe a good place to live can make your life better
                </span>

                <Accordion
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                    {data.map((item, i) => {
                        return (
                            <AccordionItem className="accordionItem" key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='flexCenter icons'>{item.icon}</div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>{item.content}</p> {/* Assuming each item has content */}
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </section>
    );
};

export default Valvo;