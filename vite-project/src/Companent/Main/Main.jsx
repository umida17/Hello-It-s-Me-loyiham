import React from 'react';
import "./Main.css";
import vector from "../../assets/Vector (16).png";
import vector17 from "../../assets/Vector (17).png";
import vector18 from "../../assets/Vector (18).png";
import over from "../../assets/Over.png";
import { useLanguage } from '../../LanguageContext/LanguageContext';


const Main = () => {
   
const { t } = useLanguage();

  return (
    <div>
      <section className='section1'>
        <div className="container">
            <div className="section1-container">
                <h3 className='our'>{t('our_services')}</h3>
                <div className="cards">
                    <div className="card">
                        <img className='vec' src={vector} alt=""/>
                        <h4 className='web'>Web Development</h4>
                        <p className='sit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus sit porro voluptas at </p>
                        <button className='mor'><a href="#">{t('read_more')}</a></button>
                    </div>

                   <div className="card">
                        <img className='vec' src={vector17} alt=""/>
                        <h4 className='web'>Web Development</h4>
                        <p className='sit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus sit porro voluptas at </p>
                        <button className='mor'><a href="#">{t('read_more')}</a></button>
                    </div>

                    <div className="card">
                        <img className='vec' src={vector18} alt=""/>
                        <h4 className='web'>Web Development</h4>
                        <p className='sit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus sit porro voluptas at </p>
                        <button className='mor'><a href="#">{t('read_more')}</a></button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='section2'>
        <div className="container">
            <div className="section2-container">
                <h2 className='late'>{t('latest_projects')}</h2>
                <div className="rasm">
                    <img className='over' src={over} alt="" />
                    <img className='over' src={over} alt="" />
                    <img className='over' src={over} alt="" />
                    <img className='over' src={over} alt="" />
                    <img className='over' src={over} alt="" />
                    <img className='over' src={over} alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>

  );

};
export default Main;