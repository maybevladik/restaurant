import React, { useState } from 'react';
import styles from './Reservation.module.css';

const ReserveTable = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [partySize, setPartySize] = useState(1);
    const [reservationDate, setReservationDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Відправка повідомлення на пошту користувача
        if(name !== '' && email !== '' && phone !== '' &&  reservationDate !==null){
            const message = `Ваша резервація столу була успішно здійснена. Деталі: ім'я - ${name}, електронна пошта - ${email}, телефон - ${phone}, кількість осіб - ${partySize}, дата резервації - ${reservationDate}.`;
            alert(message);
        } else {
            const message = "Ви невірно заповнили форму, будь ласка, передивіться ще раз"
            alert(message)
        }
    };

    return (
        <div>
            <div className="mt-3" style={{textAlign: "center"}}>
                <h6>Форма для резервації</h6>
            </div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <input
                    placeholder={"Ім'я"}
                    type="text"
                    id="name"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="email"
                    id="email"
                    placeholder={"Електронна пошта"}
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="tel"
                    id="phone"
                    className={styles.input}
                    placeholder={"Номер телефону"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="partySize" className={styles.label}>
                    Кількість осіб:
                </label>
                <select
                    id="partySize"
                    className={styles.select}
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="reservationDate" className={styles.label}>
                    Дата резервації:
                </label>
                <input
                    type="date"
                    id="reservationDate"
                    className={styles.input}
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.button}>
                Зарезервувати
            </button>
        </form>
        </div>
    );
};

export default ReserveTable;