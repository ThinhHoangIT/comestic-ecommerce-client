import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";
import { EmailTwo, LocationTwo, PhoneThree, UserThree } from "@/svg";
import { useUpdateProfileMutation } from "@/redux/features/auth/authApi";
import { notifyError, notifySuccess } from "@/utils/toast";
import { userLoggedIn } from "@/redux/features/auth/authSlice";

// yup schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(10).label("Phone"),
  address: Yup.string().label("Address"),
  bio: Yup.string().min(10).label("Bio"),
});

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Cập nhật form khi dữ liệu người dùng thay đổi
  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        bio: user.bio || "",
      });
    }
  }, [user, reset]);

  // on submit
  const onSubmit = async (data) => {
    try {
      const result = await updateProfile({
        id: user?.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        bio: data.bio,
      }).unwrap();

      notifySuccess("Profile updated successfully!");

      // Cập nhật Redux store với dữ liệu mới
      dispatch(
        userLoggedIn({
          ...user,
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          bio: data.bio,
        })
      );
    } catch (err) {
      notifyError(err?.data?.message || "Cập nhật profile thất bại!");
    }
  };

  return (
    <div className="profile__info">
      <h3 className="profile__info-title">Personal Details</h3>
      <div className="profile__info-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("name", { required: `Name is required!` })}
                    name="name"
                    type="text"
                    placeholder="Enter your username"
                  />
                  <span>
                    <UserThree />
                  </span>
                  <ErrorMsg msg={errors.name?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("email", { required: `Email is required!` })}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <span>
                    <EmailTwo />
                  </span>
                  <ErrorMsg msg={errors.email?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("phone", { required: true })}
                    name="phone"
                    type="text"
                    placeholder="Enter your number"
                  />
                  <span>
                    <PhoneThree />
                  </span>
                  <ErrorMsg msg={errors.phone?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    {...register("address")}
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                  />
                  <span>
                    <LocationTwo />
                  </span>
                  <ErrorMsg msg={errors.address?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <textarea
                    {...register("bio")}
                    name="bio"
                    placeholder="Enter your bio"
                  />
                  <ErrorMsg msg={errors.bio?.message} />
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="profile__btn">
                <button type="submit" className="tp-btn" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
