import Link from "next/link";
import styles from "./addQuestionnaire.module.sass";
import { BiLogOut } from "react-icons/bi";
import AddUserPhoto from "../Add-photo";
import { dataInput, option2, option3, option4, options } from "./question";
import NavBar from "./Navigation";
import Registraton from "./PlacefResidence";

const AddProfile = () => {
  return (
    <div className={styles.sidebar_container}>
      <aside className={styles.sideBar}>
        <Link href="/" className={styles.logout}>
          <BiLogOut />
          Назад
        </Link>
        <div className={styles.sidebar_content}>
          <NavBar />
        </div>
      </aside>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_content}>
          <div className={styles.userInfo}>
            <h2>Фотография</h2>
            <AddUserPhoto />
          </div>
          <div className={styles.userDataInputs}>
            {dataInput.map((data) => {
              return (
                <div key={data.title}>
                  <div className={styles.inputs}>
                    <a href="#" className={styles.title} id="data">
                      {data.title}
                    </a>
                    <div className={styles.input_data}>
                      {data.inputs.map((inputs, index) => (
                        <input
                          key={index}
                          type={inputs.type}
                          placeholder={inputs.placeholder}
                          name={inputs.name}
                          className={styles.input_field}
                          // value={inputs.value}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.selects}>
                    <select required className={styles.select}>
                      <option disabled>Выберите пол</option>
                      {options.map((optionText, index) => (
                        <option key={index} className={styles.option}>
                          {optionText}
                        </option>
                      ))}
                    </select>
                    <select required className={styles.select}>
                      <option disabled>Гражданство</option>
                      {option2.map((optionText, index) => (
                        <option
                          key={`option2-${index}`}
                          className={styles.option}
                        >
                          {optionText}
                        </option>
                      ))}
                    </select>
                    <select required className={styles.select}>
                      <option disabled>Бывали ли вы в Германии</option>
                      {option3.map((optionText, index) => (
                        <option
                          key={`option3-${index}`}
                          className={styles.option}
                        >
                          {optionText}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
            <div className={styles.liveCountry}>
              <h3 className={styles.title_country} id="country">
                Место проживания
              </h3>
              <select required className={styles.select}>
                <option disabled>Страна</option>
                {option4.map((optionText, index) => (
                  <option key={`option4-${index}`} className={styles.option}>
                    {optionText}
                  </option>
                ))}
              </select>
            </div>
            <Registraton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
