import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";

import { useFormik } from "formik";

import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import CloseIcon from "../CloseIcon/CloseIcon";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import Button from "../Button/Button";
import FormError from "../FormError/FormError";

import { modalValidationSchema } from "../../utils/modalValidationSchema";
import carsOperations from "../../redux/cars/cars-operations";
import { ICar } from "../../model/car/car";

import { useTranslation } from "react-i18next";
import { filterData } from "../../filterData";

import "../../styles/AddForm/AddForm.scss";

interface IAddFormProps {
  toggleBackdrop?: () => void;
}

const AddForm = ({ toggleBackdrop }: IAddFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [addCarError, setAddCarError] = useState<string>("");

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
      dispatch(carsOperations.addCar(values)).then((response) => {
        if (response.payload?.message) {
          setAddCarError(response.payload.message);
        } else {
          setAddCarError("");
          resetForm();
        }
      });
    },
  });

  return (
    <Modal>
      <div className="add-form-wrapper">
        <h3 className="add-form__title">{t("addTitle")}</h3>
        {addCarError ? <div className="add-error">{addCarError}</div> : null}
        <CloseIcon onClick={toggleBackdrop} />
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
            <FormSelect
              name="transmission"
              defaultOption={t("carForm.transmission")}
              options={filterData.transmissionType}
              value={addFormik.values.transmission}
              onChange={addFormik.handleChange}
            />
            {addFormik.errors.transmission &&
              addFormik.touched.transmission && (
                <FormError errorText={addFormik.errors.transmission} />
              )}
          </label>
          <label className="form__label">
            <FormSelect
              name="fuel"
              defaultOption={t("carForm.fuel")}
              options={filterData.fuelType}
              value={addFormik.values.fuel}
              onChange={addFormik.handleChange}
            />
            {addFormik.errors.fuel && addFormik.touched.fuel && (
              <FormError errorText={addFormik.errors.fuel} />
            )}
          </label>
          <label className="form__label">
            <FormSelect
              name="vehicleClass"
              defaultOption={t("carForm.class")}
              options={filterData.classType}
              value={addFormik.values.vehicleClass}
              onChange={addFormik.handleChange}
            />
            {addFormik.errors.vehicleClass &&
              addFormik.touched.vehicleClass && (
                <FormError errorText={addFormik.errors.vehicleClass} />
              )}
          </label>

          <label className="form__label">
            <FormSelect
              name="bodyType"
              defaultOption={t("carForm.body")}
              options={filterData.bodyType}
              value={addFormik.values.bodyType}
              onChange={addFormik.handleChange}
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
      </div>
    </Modal>
  );
};

export default AddForm;
