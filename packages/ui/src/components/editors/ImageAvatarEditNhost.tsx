import Image from "next/image";
import React from "react";

type ImageAvatarEditProps = {
  label?: string;
  value: string;
  defaultValue?: string;
  removeButtonTitle?: string;
  changeButtonTitle?: string;
  onChange: (e: string) => void;
  removeFunction?: () => void | Promise<void>;
  uploadFunction?: (f: File) => string | Promise<string>;
};

export function ImageAvatarEditNhost({
  label,
  value,
  defaultValue = "/images/avatar.png",
  removeButtonTitle = "Remove",
  changeButtonTitle = "Change",
  onChange,
  removeFunction,
  uploadFunction,
}: ImageAvatarEditProps) {
  const onClickRemove: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    onChange(defaultValue);
    if (removeFunction) {
      await removeFunction();
    }
  };
  const onClickChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      if (uploadFunction) {
        onChange(defaultValue);
        const url = await uploadFunction(files[0]);
        onChange(url);
      }
    }
  };
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="mt-1 flex items-center">
        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
          <Image
            className="h-full w-full text-gray-300"
            src={value}
            alt="preview image"
            width={48}
            height={48}
            unoptimized
          />
          {/* <svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg> */}
        </span>
        <label className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {changeButtonTitle}
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={onClickChange}
          />
        </label>
        <button
          type="button"
          onClick={onClickRemove}
          className="ml-5 rounded-md border border-red-300 bg-red-100 py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          {removeButtonTitle}
        </button>
      </div>
    </div>
  );
}
