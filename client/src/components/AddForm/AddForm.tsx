import { useAppDispatch } from "../../redux/hooks/hooks";

import { useFormik } from "formik";

import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import CloseIcon from "../CloseIcon/CloseIcon";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import FormError from "../FormError/FormError";

import { modalValidationSchema } from "../../utils/modalValidationSchema";
import carsOperations from "../../redux/cars/cars-operations";
import { ICar } from "../../model/car/car";

import { useTranslation } from "react-i18next";
import "../../styles/AddForm/AddForm.scss";

interface IAddFormProps {
  toggleBackdrop?: () => void;
  theme: string | null;
}

const AddForm = ({ toggleBackdrop, theme }: IAddFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const addFormik = useFormik<ICar>({
    initialValues: {
      brand: "",
      model: "",
      year: "",
      engineDisplacement: "",
      transmission: "",
      fuel: "",
      vehicleClass: "",
      bodyType: "",
      price: "",
      imageURL: "",
    },

    validationSchema: modalValidationSchema,

    onSubmit: (values, { resetForm }) => {
      dispatch(carsOperations.addCar(values));
      resetForm();
    },
  });

  return (
    <Modal>
      <h3 className="add-form__title">{t("addTitle")}</h3>
      <CloseIcon onClick={toggleBackdrop} theme={theme} />
      <Form onSubmit={addFormik.handleSubmit} variant="add">
        <label className="form__label">
          <FormInput
            name="brand"
            type="text"
            placeholder={t("carForm.brand")}
            value={addFormik.values.brand}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.brand && addFormik.touched.brand && (
            <FormError errorText={addFormik.errors.brand} />
          )}
        </label>
        <label className="form__label">
          <FormInput
            name="model"
            type="text"
            placeholder={t("carForm.model")}
            value={addFormik.values.model}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.model && addFormik.touched.model && (
            <FormError errorText={addFormik.errors.model} />
          )}
        </label>
        <label className="form__label">
          <FormInput
            name="year"
            type="text"
            placeholder={t("carForm.year")}
            value={addFormik.values.year}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.year && addFormik.touched.year && (
            <FormError errorText={addFormik.errors.year} />
          )}
        </label>
        <label className="form__label">
          <FormInput
            name="engineDisplacement"
            type="text"
            placeholder={t("carForm.engine")}
            value={addFormik.values.engineDisplacement}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.engineDisplacement &&
            addFormik.touched.engineDisplacement && (
              <FormError errorText={addFormik.errors.engineDisplacement} />
            )}
        </label>
        <label className="form__label">
          <FormInput
            name="transmission"
            type="text"
            placeholder={t("carForm.transmission")}
            value={addFormik.values.transmission}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.transmission && addFormik.touched.transmission && (
            <FormError errorText={addFormik.errors.transmission} />
          )}
        </label>
        <label className="form__label">
          <FormInput
            name="fuel"
            type="text"
            placeholder={t("carForm.fuel")}
            value={addFormik.values.fuel}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.fuel && addFormik.touched.fuel && (
            <FormError errorText={addFormik.errors.fuel} />
          )}
        </label>
        <label className="form__label">
          <FormInput
            name="vehicleClass"
            type="text"
            placeholder={t("carForm.class")}
            value={addFormik.values.vehicleClass}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.vehicleClass && addFormik.touched.vehicleClass && (
            <FormError errorText={addFormik.errors.vehicleClass} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="bodyType"
            type="text"
            placeholder={t("carForm.body")}
            value={addFormik.values.bodyType}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.bodyType && addFormik.touched.bodyType && (
            <FormError errorText={addFormik.errors.bodyType} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="price"
            type="text"
            placeholder={t("carForm.price")}
            value={addFormik.values.price}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.price && addFormik.touched.price && (
            <FormError errorText={addFormik.errors.price} />
          )}
        </label>
        <label className="form__label">
          <FormInput
            name="imageURL"
            type="text"
            placeholder={t("carForm.image")}
            value={addFormik.values.imageURL}
            onChange={addFormik.handleChange}
            onBlur={addFormik.handleBlur}
          />
          {addFormik.errors.imageURL && addFormik.touched.imageURL && (
            <FormError errorText={addFormik.errors.imageURL} />
          )}
        </label>
        <Button type="submit" text={t("addConfirm")} variant="form" />
      </Form>
    </Modal>
  );
};

export default AddForm;
