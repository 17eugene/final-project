import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { useFormik } from "formik";
import { modalValidationSchema } from "../../utils/modalValidationSchema";

import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import FormError from "../FormError/FormError";
import Button from "../Button/Button";

import carsOperations from "../../redux/cars/cars-operations";

import { t } from "i18next";

import "../../styles/UpdateForm/UpdateForm.scss";
import CloseIcon from "../CloseIcon/CloseIcon";

interface IUpdateFormProps {
  toggleUpdateForm: () => void;
  theme: string | null;
}

const UpdateForm = ({ toggleUpdateForm, theme }: IUpdateFormProps) => {
  const dispatch = useAppDispatch();
  const selectedCar = useAppSelector((state) => state.cars.selectedCar);
  const updateFormik = useFormik({
    initialValues: {
      id: selectedCar?._id || "",
      brand: selectedCar?.brand || "",
      model: selectedCar?.model || "",
      year: selectedCar?.year || "",
      engineDisplacement: selectedCar?.engineDisplacement || "",
      transmission: selectedCar?.transmission || "",
      fuel: selectedCar?.fuel || "",
      vehicleClass: selectedCar?.vehicleClass || "",
      bodyType: selectedCar?.bodyType || "",
      price: selectedCar?.price || "",
      imageURL: selectedCar?.imageURL || "",
    },

    validationSchema: modalValidationSchema,

    onSubmit: (values) => {
      dispatch(carsOperations.updateCar(values));
      toggleUpdateForm();
    },
  });
  return (
    <Modal>
      <CloseIcon onClick={toggleUpdateForm} theme={theme} />
      <Form onSubmit={updateFormik.handleSubmit} variant="upd">
        <label className="form__label">
          <FormInput
            name="brand"
            type="text"
            placeholder={t("carForm.brand")}
            value={updateFormik.values.brand}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.brand && updateFormik.touched.brand && (
            <FormError errorText={updateFormik.errors.brand} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="model"
            type="text"
            placeholder={t("carForm.model")}
            value={updateFormik.values.model}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.model && updateFormik.touched.model && (
            <FormError errorText={updateFormik.errors.model} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="year"
            type="text"
            placeholder={t("carForm.year")}
            value={updateFormik.values.year}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.year && updateFormik.touched.year && (
            <FormError errorText={updateFormik.errors.year} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="engineDisplacement"
            type="text"
            placeholder={t("carForm.engine")}
            value={updateFormik.values.engineDisplacement}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.engineDisplacement &&
            updateFormik.touched.engineDisplacement && (
              <FormError errorText={updateFormik.errors.engineDisplacement} />
            )}
        </label>

        <label className="form__label">
          <FormInput
            name="transmission"
            type="text"
            placeholder={t("carForm.transmission")}
            value={updateFormik.values.transmission}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.transmission &&
            updateFormik.touched.transmission && (
              <FormError errorText={updateFormik.errors.transmission} />
            )}
        </label>

        <label className="form__label">
          <FormInput
            name="fuel"
            type="text"
            placeholder={t("carForm.fuel")}
            value={updateFormik.values.fuel}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.fuel && updateFormik.touched.fuel && (
            <FormError errorText={updateFormik.errors.fuel} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="vehicleClass"
            type="text"
            placeholder={t("carForm.class")}
            value={updateFormik.values.vehicleClass}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.vehicleClass &&
            updateFormik.touched.vehicleClass && (
              <FormError errorText={updateFormik.errors.vehicleClass} />
            )}
        </label>

        <label className="form__label">
          <FormInput
            name="bodyType"
            type="text"
            placeholder={t("carForm.body")}
            value={updateFormik.values.bodyType}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.bodyType && updateFormik.touched.bodyType && (
            <FormError errorText={updateFormik.errors.bodyType} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="price"
            type="text"
            placeholder={t("carForm.price")}
            value={updateFormik.values.price}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.price && updateFormik.touched.price && (
            <FormError errorText={updateFormik.errors.price} />
          )}
        </label>

        <label className="form__label">
          <FormInput
            name="imageURL"
            type="text"
            placeholder={t("carForm.image")}
            value={updateFormik.values.imageURL}
            onChange={updateFormik.handleChange}
            onBlur={updateFormik.handleBlur}
          />
          {updateFormik.errors.imageURL && updateFormik.touched.imageURL && (
            <FormError errorText={updateFormik.errors.imageURL} />
          )}
        </label>
        <Button type="submit" text={t("submit")} variant="form" />
      </Form>
    </Modal>
  );
};

export default UpdateForm;
