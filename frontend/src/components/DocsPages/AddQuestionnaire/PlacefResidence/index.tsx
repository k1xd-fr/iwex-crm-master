import styles from "../addQuestionnaire.module.sass";
import { dataInputRegiatration } from "../question";

const Registraton = () => {
  return (
    <div>
      {dataInputRegiatration.map((data) => {
        return (
          <div key={data.title} className={styles.wrap}>
            <h2 className={styles.residence_title}>{data.title}</h2>
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
          </div>
        );
      })}
    </div>
  );
};

export default Registraton;
