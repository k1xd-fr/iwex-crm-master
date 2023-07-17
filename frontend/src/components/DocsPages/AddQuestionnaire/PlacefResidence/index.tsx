import styles from "../addQuestionnaire.module.sass";
import { dataInputRegiatration, option5 } from "../question";

const Registraton = () => {
  return (
    <div>
      {dataInputRegiatration.map((data) => {
        return (
          <div key={data.title} className={styles.wrap}>
            <h2 className={styles.residence_title} id="residence">
              {data.title}
            </h2>
            <div className={styles.wrap_residence}>
              {data.inputs.map((inputs, index) => (
                <input
                  key={index}
                  type={inputs.type}
                  placeholder={inputs.placeholder}
                  name={inputs.name}
                  className={styles.input_field_residence}
                />
              ))}
            </div>
            <select className={styles.select_residence}>
              <option disabled>Выберите Область</option>
              {option5.map((optionText, index) => (
                <option key={`option5-${index}`} className={styles.option}>
                  {optionText}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default Registraton;
