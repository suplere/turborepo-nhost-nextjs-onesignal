var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/layouts/AuthLayout.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function AuthLayout({
  children,
  title,
  logo,
  mainText,
  secondaryText,
  secondaryLink
}) {
  useEffect(() => {
    document.body.classList.add("h-full");
    document.body.classList.add("bg-gray-50");
  });
  return /* @__PURE__ */ jsxs2(Fragment, {
    children: [
      /* @__PURE__ */ jsxs2(Head, {
        children: [
          /* @__PURE__ */ jsx2("title", {
            children: title
          }),
          /* @__PURE__ */ jsx2("meta", {
            name: "viewport",
            content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          })
        ]
      }),
      /* @__PURE__ */ jsx2("div", {
        className: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs2("div", {
          className: "w-full max-w-md space-y-8",
          children: [
            /* @__PURE__ */ jsxs2("div", {
              children: [
                logo && /* @__PURE__ */ jsx2(Image, {
                  className: "mx-auto h-20 w-auto",
                  src: logo,
                  alt: "Your Company",
                  width: 80,
                  height: 80
                }),
                /* @__PURE__ */ jsx2("h2", {
                  className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",
                  children: mainText
                }),
                secondaryText && (secondaryLink ? /* @__PURE__ */ jsxs2("p", {
                  className: "mt-2 text-center text-sm text-gray-600",
                  children: [
                    "Or",
                    " ",
                    /* @__PURE__ */ jsx2(Link, {
                      href: secondaryLink,
                      className: "font-medium text-indigo-600 hover:text-indigo-500",
                      children: secondaryText
                    })
                  ]
                }) : /* @__PURE__ */ jsxs2("p", {
                  className: "mt-2 text-center text-sm text-gray-600",
                  children: [
                    "Or",
                    " ",
                    /* @__PURE__ */ jsx2("span", {
                      className: "font-medium text-indigo-600 hover:text-indigo-500",
                      children: secondaryText
                    })
                  ]
                }))
              ]
            }),
            children
          ]
        })
      })
    ]
  });
}
var AuthLayout_default = AuthLayout;

// src/components/forms/LoginForm.tsx
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link2 from "next/link";
import { useForm } from "react-hook-form";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function LoginForm({ onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  return /* @__PURE__ */ jsxs3("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit(onSubmit),
    children: [
      /* @__PURE__ */ jsx3("input", {
        type: "hidden",
        name: "remember",
        defaultValue: "true"
      }),
      /* @__PURE__ */ jsxs3("div", {
        className: "-space-y-px rounded-md shadow-sm",
        children: [
          /* @__PURE__ */ jsxs3("div", {
            children: [
              /* @__PURE__ */ jsx3("label", {
                htmlFor: "email-address",
                className: "sr-only",
                children: "Email address"
              }),
              /* @__PURE__ */ jsx3("input", __spreadProps(__spreadValues({}, register("email", {
                required: {
                  value: true,
                  message: "Field is required."
                }
              })), {
                type: "email",
                autoComplete: "email",
                className: "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Email address"
              })),
              errors.email && /* @__PURE__ */ jsx3("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx3("p", {
                  className: "text-xs text-red-500",
                  children: errors.email.message
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs3("div", {
            children: [
              /* @__PURE__ */ jsx3("label", {
                htmlFor: "password",
                className: "sr-only",
                children: "Password"
              }),
              /* @__PURE__ */ jsx3("input", __spreadProps(__spreadValues({}, register("password", {
                required: {
                  value: true,
                  message: "Field is required."
                }
              })), {
                type: "password",
                autoComplete: "current-password",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Password"
              })),
              errors.password && /* @__PURE__ */ jsx3("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx3("p", {
                  className: "text-xs text-red-500",
                  children: errors.password.message
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs3("div", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsx3("div", {
            className: "flex items-center"
          }),
          /* @__PURE__ */ jsx3("div", {
            className: "text-sm",
            children: /* @__PURE__ */ jsx3(Link2, {
              href: "/forgot",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Forgot your password?"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx3("div", {
        children: /* @__PURE__ */ jsxs3("button", {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ jsx3("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /* @__PURE__ */ jsx3(LockClosedIcon, {
                className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
                "aria-hidden": "true"
              })
            }),
            "Sign in"
          ]
        })
      })
    ]
  });
}

// src/components/forms/ForgotPasswordForm.tsx
import { LockClosedIcon as LockClosedIcon2 } from "@heroicons/react/20/solid";
import Link3 from "next/link";
import { useForm as useForm2 } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function ForgotPasswordForm({ onSubmit }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm2({
    defaultValues: {
      email: ""
    },
    resolver: yupResolver(validationSchema)
  });
  return /* @__PURE__ */ jsxs4("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit(onSubmit),
    children: [
      /* @__PURE__ */ jsx4("input", {
        type: "hidden",
        name: "remember",
        defaultValue: "true"
      }),
      /* @__PURE__ */ jsx4("div", {
        className: "-space-y-px rounded-md shadow-sm",
        children: /* @__PURE__ */ jsxs4("div", {
          children: [
            /* @__PURE__ */ jsx4("label", {
              htmlFor: "email-address",
              className: "sr-only",
              children: "Email address"
            }),
            /* @__PURE__ */ jsx4("input", __spreadProps(__spreadValues({}, register("email")), {
              type: "email",
              autoComplete: "email",
              className: "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
              placeholder: "Email address"
            })),
            errors.email && /* @__PURE__ */ jsx4("div", {
              className: "my-1",
              children: /* @__PURE__ */ jsx4("p", {
                className: "text-xs text-red-500",
                children: errors.email.message
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs4("div", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsx4("div", {
            className: "flex items-center"
          }),
          /* @__PURE__ */ jsx4("div", {
            className: "text-sm",
            children: /* @__PURE__ */ jsx4(Link3, {
              href: "/login",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Back to login?"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx4("div", {
        children: /* @__PURE__ */ jsxs4("button", {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ jsx4("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /* @__PURE__ */ jsx4(LockClosedIcon2, {
                className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
                "aria-hidden": "true"
              })
            }),
            "Forgot password"
          ]
        })
      })
    ]
  });
}

// src/components/forms/RegisterForm.tsx
import { LockClosedIcon as LockClosedIcon3 } from "@heroicons/react/20/solid";
import Link4 from "next/link";
import { useForm as useForm3 } from "react-hook-form";
import { yupResolver as yupResolver2 } from "@hookform/resolvers/yup";
import * as Yup2 from "yup";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function RegisterForm({ onSubmit }) {
  const validationSchema = Yup2.object().shape({
    firstname: Yup2.string().required("First Name is required"),
    lastname: Yup2.string().required("Last name is required"),
    email: Yup2.string().required("Email is required").email("Email is invalid"),
    password: Yup2.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirm: Yup2.string().oneOf([Yup2.ref("password"), null], "Passwords must match").required("Confirm Password is required")
  });
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm3({
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      firstname: "",
      lastname: "",
      mobile: ""
    },
    resolver: yupResolver2(validationSchema)
  });
  return /* @__PURE__ */ jsxs5("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit(onSubmit),
    children: [
      /* @__PURE__ */ jsx5("input", {
        type: "hidden",
        name: "remember",
        defaultValue: "true"
      }),
      /* @__PURE__ */ jsxs5("div", {
        className: "-space-y-px rounded-md shadow-sm",
        children: [
          /* @__PURE__ */ jsxs5("div", {
            children: [
              /* @__PURE__ */ jsx5("label", {
                htmlFor: "email-address",
                className: "sr-only",
                children: "Email address"
              }),
              /* @__PURE__ */ jsx5("input", __spreadProps(__spreadValues({}, register("email")), {
                type: "email",
                autoComplete: "email",
                className: "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Email address"
              })),
              errors.email && /* @__PURE__ */ jsx5("div", {
                className: "my-1",
                children: /* @__PURE__ */ jsx5("p", {
                  className: "text-xs text-red-500",
                  children: errors.email.message
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            children: [
              /* @__PURE__ */ jsx5("label", {
                htmlFor: "password",
                className: "sr-only",
                children: "Password"
              }),
              /* @__PURE__ */ jsx5("input", __spreadProps(__spreadValues({}, register("password")), {
                type: "password",
                autoComplete: "current-password",
                className: "relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Password"
              })),
              errors.password && /* @__PURE__ */ jsx5("div", {
                className: "my-1",
                children: /* @__PURE__ */ jsx5("p", {
                  className: "text-xs text-red-500",
                  children: errors.password.message
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            children: [
              /* @__PURE__ */ jsx5("label", {
                htmlFor: "password",
                className: "sr-only",
                children: "Password again"
              }),
              /* @__PURE__ */ jsx5("input", __spreadProps(__spreadValues({}, register("confirm")), {
                type: "password",
                autoComplete: "current-password",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Password again"
              })),
              errors.confirm && /* @__PURE__ */ jsx5("div", {
                className: "my-1",
                children: /* @__PURE__ */ jsx5("p", {
                  className: "text-xs text-red-500",
                  children: errors.confirm.message
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            children: [
              /* @__PURE__ */ jsx5("label", {
                htmlFor: "firstname",
                className: "sr-only",
                children: "First Name"
              }),
              /* @__PURE__ */ jsx5("input", __spreadProps(__spreadValues({}, register("firstname")), {
                type: "text",
                autoComplete: "firstName",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "First Name"
              })),
              errors.firstname && /* @__PURE__ */ jsx5("div", {
                className: "my-1",
                children: /* @__PURE__ */ jsx5("p", {
                  className: "text-xs text-red-500",
                  children: errors.firstname.message
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            children: [
              /* @__PURE__ */ jsx5("label", {
                htmlFor: "lastname",
                className: "sr-only",
                children: "Last Name"
              }),
              /* @__PURE__ */ jsx5("input", __spreadProps(__spreadValues({}, register("lastname")), {
                type: "text",
                autoComplete: "lastName",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Last Name"
              })),
              errors.lastname && /* @__PURE__ */ jsx5("div", {
                className: "my-1",
                children: /* @__PURE__ */ jsx5("p", {
                  className: "text-xs text-red-500",
                  children: errors.lastname.message
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            children: [
              /* @__PURE__ */ jsx5("label", {
                htmlFor: "mobile",
                className: "sr-only",
                children: "Mobile Phone"
              }),
              /* @__PURE__ */ jsx5("input", __spreadProps(__spreadValues({}, register("mobile")), {
                type: "text",
                autoComplete: "mobile",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Mobile Phone"
              })),
              errors.mobile && /* @__PURE__ */ jsx5("div", {
                className: "my-1",
                children: /* @__PURE__ */ jsx5("p", {
                  className: "text-xs text-red-500",
                  children: errors.mobile.message
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs5("div", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsx5("div", {
            className: "flex items-center"
          }),
          /* @__PURE__ */ jsx5("div", {
            className: "text-sm",
            children: /* @__PURE__ */ jsx5(Link4, {
              href: "/forgot",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Forgot your password?"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx5("div", {
        children: /* @__PURE__ */ jsxs5("button", {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ jsx5("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /* @__PURE__ */ jsx5(LockClosedIcon3, {
                className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
                "aria-hidden": "true"
              })
            }),
            "Sign in"
          ]
        })
      })
    ]
  });
}

// src/components/forms/ProfileForm.tsx
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { Controller, useForm as useForm4 } from "react-hook-form";

// src/components/editors/DragAndDropImageEdit.tsx
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var DragAndDropImageEdit = () => {
  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let files = e.dataTransfer.files;
    console.log(files);
  };
  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    console.log(e);
  };
  return /* @__PURE__ */ jsx6(Fragment2, {
    children: /* @__PURE__ */ jsx6("div", {
      children: /* @__PURE__ */ jsxs6("label", {
        className: "block text-sm font-medium text-gray-700 cursor-pointer ",
        children: [
          "Cover photo",
          /* @__PURE__ */ jsx6("div", {
            className: "mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6",
            onDrop,
            onDragEnter,
            onDragLeave,
            onDragOver,
            children: /* @__PURE__ */ jsxs6("div", {
              className: "space-y-1 text-center",
              children: [
                /* @__PURE__ */ jsx6("svg", {
                  className: "mx-auto h-12 w-12 text-gray-400",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 48 48",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx6("path", {
                    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                }),
                /* @__PURE__ */ jsxs6("div", {
                  className: "flex text-sm text-gray-600",
                  children: [
                    /* @__PURE__ */ jsx6("div", {
                      className: "relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",
                      children: /* @__PURE__ */ jsx6("span", {
                        children: "Upload a file"
                      })
                    }),
                    /* @__PURE__ */ jsx6("p", {
                      className: "pl-1",
                      children: "or drag and drop"
                    })
                  ]
                }),
                /* @__PURE__ */ jsx6("p", {
                  className: "text-xs text-gray-500",
                  children: "PNG, JPG, GIF up to 10MB"
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx6("input", {
            id: "file-upload",
            name: "file-upload",
            type: "file",
            className: "sr-only"
          })
        ]
      })
    })
  });
};

// src/components/editors/ImageAvatarEditNhost.tsx
import Image2 from "next/image";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function ImageAvatarEditNhost({
  label,
  value,
  defaultValue = "/images/avatar.png",
  removeButtonTitle = "Remove",
  changeButtonTitle = "Change",
  onChange,
  removeFunction,
  uploadFunction
}) {
  const onClickRemove = (e) => __async(this, null, function* () {
    e.preventDefault();
    onChange(defaultValue);
    if (removeFunction) {
      yield removeFunction();
    }
  });
  const onClickChange = (e) => __async(this, null, function* () {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      if (uploadFunction) {
        onChange(defaultValue);
        const url = yield uploadFunction(files[0]);
        onChange(url);
      }
    }
  });
  return /* @__PURE__ */ jsxs7("div", {
    children: [
      label && /* @__PURE__ */ jsx7("label", {
        className: "block text-sm font-medium text-gray-700",
        children: label
      }),
      /* @__PURE__ */ jsxs7("div", {
        className: "mt-1 flex items-center",
        children: [
          /* @__PURE__ */ jsx7("span", {
            className: "inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100",
            children: /* @__PURE__ */ jsx7(Image2, {
              className: "h-full w-full text-gray-300",
              src: value,
              alt: "preview image",
              width: 48,
              height: 48,
              unoptimized: true
            })
          }),
          /* @__PURE__ */ jsxs7("label", {
            className: "ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            children: [
              changeButtonTitle,
              /* @__PURE__ */ jsx7("input", {
                id: "file-upload",
                name: "file-upload",
                type: "file",
                className: "sr-only",
                onChange: onClickChange
              })
            ]
          }),
          /* @__PURE__ */ jsx7("button", {
            type: "button",
            onClick: onClickRemove,
            className: "ml-5 rounded-md border border-red-300 bg-red-100 py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
            children: removeButtonTitle
          })
        ]
      })
    ]
  });
}

// src/components/forms/ProfileForm.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var ProfileForm = ({
  initialData,
  onSubmit,
  avatarHandle
}) => {
  const { register, handleSubmit, control } = useForm4({
    defaultValues: {
      avatarUrl: initialData == null ? void 0 : initialData.avatarUrl,
      firstname: initialData == null ? void 0 : initialData.firstname,
      lastname: initialData == null ? void 0 : initialData.lastname,
      mobile: initialData == null ? void 0 : initialData.mobile
    }
  });
  return /* @__PURE__ */ jsx8("form", {
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ jsxs8("div", {
      className: "shadow sm:overflow-hidden sm:rounded-md",
      children: [
        /* @__PURE__ */ jsxs8("div", {
          className: "space-y-6 bg-white px-4 py-5 sm:p-6",
          children: [
            /* @__PURE__ */ jsxs8("div", {
              className: "grid grid-cols-6 gap-6",
              children: [
                /* @__PURE__ */ jsxs8("div", {
                  className: "col-span-6 sm:col-span-3",
                  children: [
                    /* @__PURE__ */ jsx8("label", {
                      htmlFor: "firstname",
                      className: "block text-sm font-medium text-gray-700",
                      children: "First Name"
                    }),
                    /* @__PURE__ */ jsx8("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /* @__PURE__ */ jsx8("input", __spreadProps(__spreadValues({}, register("firstname", { required: "Field is reguired" })), {
                        type: "text",
                        className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "First Name"
                      }))
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs8("div", {
                  className: "col-span-6 sm:col-span-3",
                  children: [
                    /* @__PURE__ */ jsx8("label", {
                      htmlFor: "lastname",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Last Name"
                    }),
                    /* @__PURE__ */ jsx8("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /* @__PURE__ */ jsx8("input", __spreadProps(__spreadValues({}, register("lastname", { required: "Field is reguired" })), {
                        type: "text",
                        className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "Last Name"
                      }))
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs8("div", {
                  className: "col-span-6 sm:col-span-3",
                  children: [
                    /* @__PURE__ */ jsx8("label", {
                      htmlFor: "mobile",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Mobile phone"
                    }),
                    /* @__PURE__ */ jsxs8("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: [
                        /* @__PURE__ */ jsx8("span", {
                          className: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500",
                          children: /* @__PURE__ */ jsx8(DevicePhoneMobileIcon, {
                            className: "h-6 w-6"
                          })
                        }),
                        /* @__PURE__ */ jsx8("input", __spreadProps(__spreadValues({}, register("mobile", { required: "Field is reguired" })), {
                          type: "text",
                          className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                          placeholder: "Mobile Phone"
                        }))
                      ]
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx8(Controller, {
              render: ({ field: { value, onChange } }) => /* @__PURE__ */ jsx8(ImageAvatarEditNhost, {
                label: "Avatar photo",
                value,
                onChange,
                removeFunction: avatarHandle == null ? void 0 : avatarHandle.removeFunction,
                uploadFunction: avatarHandle == null ? void 0 : avatarHandle.uploadFunction
              }),
              name: "avatarUrl",
              control
            })
          ]
        }),
        /* @__PURE__ */ jsx8("div", {
          className: "bg-gray-50 px-4 py-3 text-right sm:px-6",
          children: /* @__PURE__ */ jsx8("button", {
            type: "submit",
            className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            children: "Save"
          })
        })
      ]
    })
  });
};

// src/components/forms/ChangePasswordForm.tsx
import { useForm as useForm5 } from "react-hook-form";
import { yupResolver as yupResolver3 } from "@hookform/resolvers/yup";
import * as Yup3 from "yup";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var ChangePasswordForm = ({ onSubmit }) => {
  const validationSchema = Yup3.object().shape({
    password: Yup3.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirm: Yup3.string().oneOf([Yup3.ref("password"), null], "Passwords must match").required("Confirm Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm5({
    defaultValues: {
      password: "",
      confirm: ""
    },
    resolver: yupResolver3(validationSchema)
  });
  return /* @__PURE__ */ jsx9("form", {
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ jsxs9("div", {
      className: "shadow sm:overflow-hidden sm:rounded-md",
      children: [
        /* @__PURE__ */ jsx9("div", {
          className: "space-y-6 bg-white px-4 py-5 sm:p-6",
          children: /* @__PURE__ */ jsxs9("div", {
            className: "grid grid-cols-6 gap-6",
            children: [
              /* @__PURE__ */ jsxs9("div", {
                className: "col-span-6 sm:col-span-3",
                children: [
                  /* @__PURE__ */ jsx9("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700",
                    children: "New Password"
                  }),
                  /* @__PURE__ */ jsx9("div", {
                    className: "mt-1 flex rounded-md shadow-sm",
                    children: /* @__PURE__ */ jsxs9("div", {
                      className: "flex flex-col",
                      children: [
                        /* @__PURE__ */ jsx9("input", __spreadProps(__spreadValues({}, register("password")), {
                          type: "password",
                          className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        })),
                        errors.password && /* @__PURE__ */ jsx9("div", {
                          className: "my-1",
                          children: /* @__PURE__ */ jsx9("p", {
                            className: "text-xs text-red-500",
                            children: errors.password.message
                          })
                        })
                      ]
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxs9("div", {
                className: "col-span-6 sm:col-span-3",
                children: [
                  /* @__PURE__ */ jsx9("label", {
                    htmlFor: "confirm",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Confirm new password"
                  }),
                  /* @__PURE__ */ jsx9("div", {
                    className: "mt-1 flex rounded-md shadow-sm",
                    children: /* @__PURE__ */ jsxs9("div", {
                      className: "flex flex-col",
                      children: [
                        /* @__PURE__ */ jsx9("input", __spreadProps(__spreadValues({}, register("confirm")), {
                          type: "password",
                          className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        })),
                        errors.confirm && /* @__PURE__ */ jsx9("div", {
                          className: "my-1",
                          children: /* @__PURE__ */ jsx9("p", {
                            className: "text-xs text-red-500",
                            children: errors.confirm.message
                          })
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx9("div", {
          className: "bg-gray-50 px-4 py-3 text-right sm:px-6",
          children: /* @__PURE__ */ jsx9("button", {
            type: "submit",
            className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            children: "Change password"
          })
        })
      ]
    })
  });
};

// src/components/navigation/Navbar.tsx
import { Fragment as Fragment3 } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link5 from "next/link";
import Image3 from "next/image";

// src/utils/classNames.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/navigation/Navbar.tsx
import { usePathname } from "next/navigation";
import { Fragment as Fragment4, jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function Navbar({
  navigation,
  userNavigation,
  user,
  isAuthenticated,
  onLogin
}) {
  const pathname = usePathname();
  const onClickLogin = (e) => {
    if (onLogin)
      onLogin();
  };
  return /* @__PURE__ */ jsx10(Disclosure, {
    as: "nav",
    className: "bg-gray-800",
    children: ({ open }) => /* @__PURE__ */ jsxs10(Fragment4, {
      children: [
        /* @__PURE__ */ jsx10("div", {
          className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsxs10("div", {
            className: "flex h-16 justify-between",
            children: [
              /* @__PURE__ */ jsxs10("div", {
                className: "flex",
                children: [
                  /* @__PURE__ */ jsx10("div", {
                    className: "-ml-2 mr-2 flex items-center md:hidden",
                    children: /* @__PURE__ */ jsxs10(Disclosure.Button, {
                      className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                      children: [
                        /* @__PURE__ */ jsx10("span", {
                          className: "sr-only",
                          children: "Open main menu"
                        }),
                        open ? /* @__PURE__ */ jsx10(XMarkIcon, {
                          className: "block h-6 w-6",
                          "aria-hidden": "true"
                        }) : /* @__PURE__ */ jsx10(Bars3Icon, {
                          className: "block h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ jsxs10("div", {
                    className: "flex flex-shrink-0 items-center",
                    children: [
                      /* @__PURE__ */ jsx10(Image3, {
                        className: "block h-12 w-auto lg:hidden",
                        src: "/icons/icon-128x128.png",
                        alt: "Your Company",
                        width: 48,
                        height: 48,
                        unoptimized: true
                      }),
                      /* @__PURE__ */ jsx10(Image3, {
                        className: "hidden h-12 w-auto lg:block",
                        src: "/icons/icon-128x128.png",
                        alt: "Your Company",
                        width: 48,
                        height: 48,
                        unoptimized: true
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx10("div", {
                    className: "hidden md:ml-6 md:flex md:items-center md:space-x-4",
                    children: navigation.map((item) => /* @__PURE__ */ jsx10(Link5, {
                      href: item.href || "#",
                      className: classNames(
                        pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      ),
                      "aria-current": pathname === item.href ? "page" : void 0,
                      children: item.name
                    }, item.name))
                  })
                ]
              }),
              /* @__PURE__ */ jsxs10("div", {
                className: "flex items-center",
                children: [
                  !isAuthenticated && /* @__PURE__ */ jsx10("div", {
                    className: "flex-shrink-0",
                    children: /* @__PURE__ */ jsx10("button", {
                      type: "button",
                      onClick: onClickLogin,
                      className: "relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800",
                      children: /* @__PURE__ */ jsx10("span", {
                        children: "Login"
                      })
                    })
                  }),
                  user && /* @__PURE__ */ jsxs10("div", {
                    className: "hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center",
                    children: [
                      /* @__PURE__ */ jsxs10("button", {
                        type: "button",
                        className: "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                        children: [
                          /* @__PURE__ */ jsx10("span", {
                            className: "sr-only",
                            children: "View notifications"
                          }),
                          /* @__PURE__ */ jsx10(BellIcon, {
                            className: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ]
                      }),
                      /* @__PURE__ */ jsxs10(Menu, {
                        as: "div",
                        className: "relative ml-3",
                        children: [
                          /* @__PURE__ */ jsx10("div", {
                            children: /* @__PURE__ */ jsxs10(Menu.Button, {
                              className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                              children: [
                                /* @__PURE__ */ jsx10("span", {
                                  className: "sr-only",
                                  children: "Open user menu"
                                }),
                                /* @__PURE__ */ jsx10(Image3, {
                                  className: "h-8 w-8 rounded-full border",
                                  src: user.avatarUrl,
                                  alt: "",
                                  width: 32,
                                  height: 32,
                                  unoptimized: true
                                })
                              ]
                            })
                          }),
                          /* @__PURE__ */ jsx10(Transition, {
                            as: Fragment3,
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: /* @__PURE__ */ jsx10(Menu.Items, {
                              className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                              children: userNavigation.map((item) => /* @__PURE__ */ jsx10(Menu.Item, {
                                children: ({ active }) => item.href ? /* @__PURE__ */ jsx10(Link5, {
                                  href: item.href,
                                  className: classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  ),
                                  children: item.name
                                }) : /* @__PURE__ */ jsx10("div", {
                                  className: classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                    item.action ? "cursor-pointer" : ""
                                  ),
                                  onClick: () => item.action ? item.action() : void 0,
                                  children: item.name
                                })
                              }, item.name))
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsxs10(Disclosure.Panel, {
          className: "md:hidden",
          children: [
            /* @__PURE__ */ jsx10("div", {
              className: "space-y-1 px-2 pt-2 pb-3 sm:px-3",
              children: navigation.map((item) => /* @__PURE__ */ jsx10(Disclosure.Button, {
                as: Link5,
                href: item.href || "#",
                className: classNames(
                  pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                ),
                "aria-current": pathname === item.href ? "page" : void 0,
                children: item.name
              }, item.name))
            }),
            user && /* @__PURE__ */ jsxs10("div", {
              className: "border-t border-gray-700 pt-4 pb-3",
              children: [
                /* @__PURE__ */ jsxs10("div", {
                  className: "flex items-center px-5 sm:px-6",
                  children: [
                    /* @__PURE__ */ jsx10("div", {
                      className: "flex-shrink-0",
                      children: /* @__PURE__ */ jsx10(Image3, {
                        className: "h-10 w-10 rounded-full border",
                        src: user.avatarUrl,
                        alt: "",
                        height: 40,
                        width: 40,
                        unoptimized: true
                      })
                    }),
                    /* @__PURE__ */ jsxs10("div", {
                      className: "ml-3",
                      children: [
                        /* @__PURE__ */ jsx10("div", {
                          className: "text-base font-medium text-white",
                          children: user.name
                        }),
                        /* @__PURE__ */ jsx10("div", {
                          className: "text-sm font-medium text-gray-400",
                          children: user.email
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs10("button", {
                      type: "button",
                      className: "ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                      children: [
                        /* @__PURE__ */ jsx10("span", {
                          className: "sr-only",
                          children: "View notifications"
                        }),
                        /* @__PURE__ */ jsx10(BellIcon, {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  ]
                }),
                /* @__PURE__ */ jsx10("div", {
                  className: "mt-3 space-y-1 px-2 sm:px-3",
                  children: userNavigation.map(
                    (item) => item.href ? /* @__PURE__ */ jsx10(Disclosure.Button, {
                      as: Link5,
                      href: item.href,
                      className: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",
                      children: item.name
                    }, item.name) : /* @__PURE__ */ jsx10(Disclosure.Button, {
                      as: "div",
                      onClick: () => item.action ? item.action() : void 0,
                      className: classNames(
                        "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",
                        item.action ? "cursor-pointer" : ""
                      ),
                      children: item.name
                    }, item.name)
                  )
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
export {
  AuthLayout_default as AuthLayout,
  Button,
  ChangePasswordForm,
  DragAndDropImageEdit,
  ForgotPasswordForm,
  ImageAvatarEditNhost,
  LoginForm,
  Navbar,
  ProfileForm,
  RegisterForm,
  classNames
};
