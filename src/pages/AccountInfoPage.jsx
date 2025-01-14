import FormGroup from "@/components/common/FormGroup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AccountInfoPage = ({ user }) => {
  const { control } = useForm();

  return (
    <div className="page-container flex justify-center items-center mb-10">
      <div className="w-[80%] bg-white">
        <div className="flex text-2xl text-center mb-10">
          <Link
            className="w-full py-2 px-5 border border-b-transparent rounded-t-md"
            to={"/infoAccount"}
          >
            <span>Thông tin tài khoản</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/updateAccount"}
          >
            <span className="opacity-50">Cập nhật mật khẩu</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/deleteAccount"}
          >
            <span className="opacity-50">Xóa tài khoản</span>
          </Link>
        </div>
        <div className="w-[600px] p-5 mx-auto">
          <span className="text-text3">
            Cập nhật họ tên, số điện thoại, Email, địa chỉ của bạn
          </span>
          <FormGroup>
            <Label htmlFor="email">Hình ảnh</Label>
            <img
              className="p-3"
              src="https://th.bing.com/th/id/OIP.MJ9rxCwbF8JAgAi1giPn5gHaHa?rs=1&pid=ImgDetMain"
              alt="User avatar"
              width="150px"
            />
            <Input
              control={control}
              type="file"
              name="file"
              accept="image/*"
              // onChange={}
              autoFocus
              autoComplete="avatar"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Họ tên</Label>
            <Input type="text" control={control} name="name"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phoneNumber">Số điện thoại</Label>
            <Input type="number" control={control} name="phoneNumber"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input control={control} type="email" name="email"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">Địa chỉ</Label>
            <Input control={control} type="text" name="address"></Input>
          </FormGroup>
          <div className="flex items-center justify-center gap-3 w-full">
            <Button
              type="button"
              kind="button"
              className="flex items-center justify-center text-lg font-semibold p-1 bg-[#053024] hover:bg-[#fdc97d] hover:text-[#053024]"
            >
              <span className="px-10 py-1 border border-solid border-white hover:border-[#053024]">
                Lưu
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoPage;
