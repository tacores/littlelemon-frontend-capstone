import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import React, {useState} from "react";

const BookingForm = (props) => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        date: yup.string().required("Required"),
        time: yup.number().required('Required'),
        guests: yup.number().required('Required').positive().integer(),
        occasion: yup.string(),
    });

    const [availableTimesToday, setAvailableTimesToday] = useState(['17', '18']);

    const getAvailableTimes = (date) => {
        var lst = props.availableTimes[date];
        if (lst) {
            setAvailableTimesToday(lst);
        } else {
            const fullList = ['17', '18', '19', '20', '21', '22'];
            const shuffled = fullList.slice().sort(() => 0.5 - Math.random());
            lst = shuffled.slice(0, Math.floor(Math.random() * fullList.length));
            setAvailableTimesToday(lst);
        }
    };

    const handleSubmit = (e) => {
        alert('Reservation is successful!');
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();          
            }}
            initialValues={{
                date: '',
                time: '--- Please select ---',
                guests: '',
                occasion: '',
            }}
        >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors }) => (
            <Form>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Choose Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={values.date}
                        onChange={(e)=>{
                            handleChange(e);
                            setFieldTouched('date', true, true);
                            getAvailableTimes(e.target.value);
                        }}
                        isValid={touched.date && !errors.date}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Choose Time</Form.Label>
                    <Form.Select
                        name="time"
                        value={values.time}
                        onChange={handleChange}
                        disabled={!values.date}
                        isValid={touched.time && !errors.time}
                    >
                        <option value="--- Please select ---">--- Please select ---</option>
                        <option value="17" disabled={availableTimesToday && !availableTimesToday.includes('17')}>17:00</option>
                        <option value="18" disabled={availableTimesToday && !availableTimesToday.includes('18')}>18:00</option>
                        <option value="19" disabled={availableTimesToday && !availableTimesToday.includes('19')}>19:00</option>
                        <option value="20" disabled={availableTimesToday && !availableTimesToday.includes('20')}>20:00</option>
                        <option value="21" disabled={availableTimesToday && !availableTimesToday.includes('21')}>21:00</option>
                        <option value="22" disabled={availableTimesToday && !availableTimesToday.includes('22')}>22:00</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGuests">
                    <Form.Label>Number of guests</Form.Label>
                    <Form.Control
                        type="number"
                        min="1"
                        max="10"
                        name="guests"
                        value={values.guests}
                        onChange={handleChange}
                        isValid={touched.guests && !errors.guests}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOccasion">
                    <Form.Label>Occasion</Form.Label>
                    <Form.Select
                        name="occasion"
                        value={values.occasion}
                        onChange={handleChange}
                        isValid={touched.occasion && !errors.occasion}
                    >
                        <option value="NoSelect">--- Please select (optional) ---</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" id="lemon-button" onClick={handleSubmit}>Make Your reservation</Button>
            </Form>
            )}
        </Formik>
    );
}
export default BookingForm;
