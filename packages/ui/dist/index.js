"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AuthLayout: () => AuthLayout_default,
  Button: () => Button,
  ChangePasswordForm: () => ChangePasswordForm,
  DragAndDropImageEdit: () => DragAndDropImageEdit,
  ForgotPasswordForm: () => ForgotPasswordForm,
  ImageAvatarEditNhost: () => ImageAvatarEditNhost,
  LoginForm: () => LoginForm,
  Navbar: () => Navbar,
  ProfileForm: () => ProfileForm,
  RegisterForm: () => RegisterForm,
  classNames: () => classNames
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/layouts/AuthLayout.tsx
var import_head = __toESM(require("next/head"));
var import_link = __toESM(require("next/link"));
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function AuthLayout({
  children,
  title,
  logo,
  mainText,
  secondaryText,
  secondaryLink
}) {
  (0, import_react.useEffect)(() => {
    document.body.classList.add("h-full");
    document.body.classList.add("bg-gray-50");
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_head.default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", {
            children: title
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", {
            name: "viewport",
            content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        className: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
          className: "w-full max-w-md space-y-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
              children: [
                logo && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", {
                  className: "mx-auto h-20 w-auto",
                  src: logo,
                  alt: "Your Company"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", {
                  className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",
                  children: mainText
                }),
                secondaryText && (secondaryLink ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
                  className: "mt-2 text-center text-sm text-gray-600",
                  children: [
                    "Or",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, {
                      href: secondaryLink,
                      className: "font-medium text-indigo-600 hover:text-indigo-500",
                      children: secondaryText
                    })
                  ]
                }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", {
                  className: "mt-2 text-center text-sm text-gray-600",
                  children: [
                    "Or",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
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
var import_solid = require("@heroicons/react/20/solid");
var import_link2 = __toESM(require("next/link"));
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime3 = require("react/jsx-runtime");
function LoginForm({ onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0, import_react_hook_form.useForm)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit(onSubmit),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", {
        type: "hidden",
        name: "remember",
        defaultValue: "true"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        className: "-space-y-px rounded-md shadow-sm",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", {
                htmlFor: "email-address",
                className: "sr-only",
                children: "Email address"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", __spreadProps(__spreadValues({}, register("email", {
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
              errors.email && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                className: "mt-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.email.message
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", {
                htmlFor: "password",
                className: "sr-only",
                children: "Password"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", __spreadProps(__spreadValues({}, register("password", {
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
              errors.password && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                className: "mt-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.password.message
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
            className: "flex items-center"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
            className: "text-sm",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, {
              href: "/forgot",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Forgot your password?"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_solid.LockClosedIcon, {
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
var import_solid2 = require("@heroicons/react/20/solid");
var import_link3 = __toESM(require("next/link"));
var import_react_hook_form2 = require("react-hook-form");
var import_yup = require("@hookform/resolvers/yup");
var Yup = __toESM(require("yup"));
var import_jsx_runtime4 = require("react/jsx-runtime");
"use client";
function ForgotPasswordForm({ onSubmit }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = (0, import_react_hook_form2.useForm)({
    defaultValues: {
      email: ""
    },
    resolver: (0, import_yup.yupResolver)(validationSchema)
  });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit(onSubmit),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", {
        type: "hidden",
        name: "remember",
        defaultValue: "true"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
        className: "-space-y-px rounded-md shadow-sm",
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", {
              htmlFor: "email-address",
              className: "sr-only",
              children: "Email address"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", __spreadProps(__spreadValues({}, register("email")), {
              type: "email",
              autoComplete: "email",
              className: "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
              placeholder: "Email address"
            })),
            errors.email && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "my-1",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", {
                className: "text-xs text-red-500",
                children: errors.email.message
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
            className: "flex items-center"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
            className: "text-sm",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_link3.default, {
              href: "/login",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Back to login?"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_solid2.LockClosedIcon, {
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
var import_solid3 = require("@heroicons/react/20/solid");
var import_link4 = __toESM(require("next/link"));
var import_react_hook_form3 = require("react-hook-form");
var import_yup2 = require("@hookform/resolvers/yup");
var Yup2 = __toESM(require("yup"));
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  } = (0, import_react_hook_form3.useForm)({
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      firstname: "",
      lastname: "",
      mobile: ""
    },
    resolver: (0, import_yup2.yupResolver)(validationSchema)
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit(onSubmit),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", {
        type: "hidden",
        name: "remember",
        defaultValue: "true"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
        className: "-space-y-px rounded-md shadow-sm",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
                htmlFor: "email-address",
                className: "sr-only",
                children: "Email address"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", __spreadProps(__spreadValues({}, register("email")), {
                type: "email",
                autoComplete: "email",
                className: "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Email address"
              })),
              errors.email && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                className: "my-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.email.message
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
                htmlFor: "password",
                className: "sr-only",
                children: "Password"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", __spreadProps(__spreadValues({}, register("password")), {
                type: "password",
                autoComplete: "current-password",
                className: "relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Password"
              })),
              errors.password && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                className: "my-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.password.message
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
                htmlFor: "password",
                className: "sr-only",
                children: "Password again"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", __spreadProps(__spreadValues({}, register("confirm")), {
                type: "password",
                autoComplete: "current-password",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Password again"
              })),
              errors.confirm && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                className: "my-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.confirm.message
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
                htmlFor: "firstname",
                className: "sr-only",
                children: "First Name"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", __spreadProps(__spreadValues({}, register("firstname")), {
                type: "text",
                autoComplete: "firstName",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "First Name"
              })),
              errors.firstname && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                className: "my-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.firstname.message
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
                htmlFor: "lastname",
                className: "sr-only",
                children: "Last Name"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", __spreadProps(__spreadValues({}, register("lastname")), {
                type: "text",
                autoComplete: "lastName",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Last Name"
              })),
              errors.lastname && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                className: "my-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.lastname.message
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
                htmlFor: "mobile",
                className: "sr-only",
                children: "Mobile Phone"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", __spreadProps(__spreadValues({}, register("mobile")), {
                type: "text",
                autoComplete: "mobile",
                className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                placeholder: "Mobile Phone"
              })),
              errors.mobile && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                className: "my-1",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  className: "text-xs text-red-500",
                  children: errors.mobile.message
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "flex items-center"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "text-sm",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_link4.default, {
              href: "/forgot",
              className: "font-medium text-indigo-600 hover:text-indigo-500",
              children: "Forgot your password?"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
              className: "absolute inset-y-0 left-0 flex items-center pl-3",
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_solid3.LockClosedIcon, {
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
var import_solid4 = require("@heroicons/react/20/solid");
var import_react_hook_form4 = require("react-hook-form");

// src/components/editors/DragAndDropImageEdit.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", {
        className: "block text-sm font-medium text-gray-700 cursor-pointer ",
        children: [
          "Cover photo",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
            className: "mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6",
            onDrop,
            onDragEnter,
            onDragLeave,
            onDragOver,
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
              className: "space-y-1 text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", {
                  className: "mx-auto h-12 w-12 text-gray-400",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 48 48",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
                  className: "flex text-sm text-gray-600",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
                      className: "relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",
                      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
                        children: "Upload a file"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
                      className: "pl-1",
                      children: "or drag and drop"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
                  className: "text-xs text-gray-500",
                  children: "PNG, JPG, GIF up to 10MB"
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
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
var import_image = __toESM(require("next/image"));
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", {
        className: "block text-sm font-medium text-gray-700",
        children: label
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
        className: "mt-1 flex items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
            className: "inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_image.default, {
              className: "h-full w-full text-gray-300",
              src: value,
              alt: "preview image",
              width: 48,
              height: 48,
              unoptimized: true
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", {
            className: "ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            children: [
              changeButtonTitle,
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", {
                id: "file-upload",
                name: "file-upload",
                type: "file",
                className: "sr-only",
                onChange: onClickChange
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", {
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var ProfileForm = ({
  initialData,
  onSubmit,
  avatarHandle
}) => {
  const { register, handleSubmit, control } = (0, import_react_hook_form4.useForm)({
    defaultValues: {
      avatarUrl: initialData == null ? void 0 : initialData.avatarUrl,
      firstname: initialData == null ? void 0 : initialData.firstname,
      lastname: initialData == null ? void 0 : initialData.lastname,
      mobile: initialData == null ? void 0 : initialData.mobile
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("form", {
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
      className: "shadow sm:overflow-hidden sm:rounded-md",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
          className: "space-y-6 bg-white px-4 py-5 sm:p-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
              className: "grid grid-cols-6 gap-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
                  className: "col-span-6 sm:col-span-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", {
                      htmlFor: "firstname",
                      className: "block text-sm font-medium text-gray-700",
                      children: "First Name"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", __spreadProps(__spreadValues({}, register("firstname", { required: "Field is reguired" })), {
                        type: "text",
                        className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "First Name"
                      }))
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
                  className: "col-span-6 sm:col-span-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", {
                      htmlFor: "lastname",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Last Name"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", __spreadProps(__spreadValues({}, register("lastname", { required: "Field is reguired" })), {
                        type: "text",
                        className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "Last Name"
                      }))
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
                  className: "col-span-6 sm:col-span-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", {
                      htmlFor: "mobile",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Mobile phone"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
                      className: "mt-1 flex rounded-md shadow-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {
                          className: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_solid4.DevicePhoneMobileIcon, {
                            className: "h-6 w-6"
                          })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", __spreadProps(__spreadValues({}, register("mobile", { required: "Field is reguired" })), {
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
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_hook_form4.Controller, {
              render: ({ field: { value, onChange } }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ImageAvatarEditNhost, {
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "bg-gray-50 px-4 py-3 text-right sm:px-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", {
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
var import_react_hook_form5 = require("react-hook-form");
var import_yup3 = require("@hookform/resolvers/yup");
var Yup3 = __toESM(require("yup"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var ChangePasswordForm = ({ onSubmit }) => {
  const validationSchema = Yup3.object().shape({
    password: Yup3.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirm: Yup3.string().oneOf([Yup3.ref("password"), null], "Passwords must match").required("Confirm Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = (0, import_react_hook_form5.useForm)({
    defaultValues: {
      password: "",
      confirm: ""
    },
    resolver: (0, import_yup3.yupResolver)(validationSchema)
  });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("form", {
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
      className: "shadow sm:overflow-hidden sm:rounded-md",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
          className: "space-y-6 bg-white px-4 py-5 sm:p-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
            className: "grid grid-cols-6 gap-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
                className: "col-span-6 sm:col-span-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700",
                    children: "New Password"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                    className: "mt-1 flex rounded-md shadow-sm",
                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", __spreadProps(__spreadValues({}, register("password")), {
                          type: "password",
                          className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        })),
                        errors.password && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                          className: "my-1",
                          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", {
                            className: "text-xs text-red-500",
                            children: errors.password.message
                          })
                        })
                      ]
                    })
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
                className: "col-span-6 sm:col-span-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", {
                    htmlFor: "confirm",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Confirm new password"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                    className: "mt-1 flex rounded-md shadow-sm",
                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", __spreadProps(__spreadValues({}, register("confirm")), {
                          type: "password",
                          className: "block w-full flex-1 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        })),
                        errors.confirm && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                          className: "my-1",
                          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", {
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
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
          className: "bg-gray-50 px-4 py-3 text-right sm:px-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", {
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
var import_react2 = require("react");
var import_react3 = require("@headlessui/react");
var import_outline = require("@heroicons/react/24/outline");
var import_link5 = __toESM(require("next/link"));
var import_image2 = __toESM(require("next/image"));

// src/utils/classNames.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/navigation/Navbar.tsx
var import_router = require("next/router");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Navbar({
  navigation,
  userNavigation,
  user,
  isAuthenticated,
  onLogin
}) {
  const router = (0, import_router.useRouter)();
  const onClickLogin = (e) => {
    if (onLogin)
      onLogin();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Disclosure, {
    as: "nav",
    className: "bg-gray-800",
    children: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex h-16 justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "flex",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                    className: "-ml-2 mr-2 flex items-center md:hidden",
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react3.Disclosure.Button, {
                      className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                          className: "sr-only",
                          children: "Open main menu"
                        }),
                        open ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_outline.XMarkIcon, {
                          className: "block h-6 w-6",
                          "aria-hidden": "true"
                        }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_outline.Bars3Icon, {
                          className: "block h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                    className: "flex flex-shrink-0 items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_image2.default, {
                        className: "block h-12 w-auto lg:hidden",
                        src: "/icons/icon-128x128.png",
                        alt: "Your Company",
                        width: 48,
                        height: 48,
                        unoptimized: true
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_image2.default, {
                        className: "hidden h-12 w-auto lg:block",
                        src: "/icons/icon-128x128.png",
                        alt: "Your Company",
                        width: 48,
                        height: 48,
                        unoptimized: true
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                    className: "hidden md:ml-6 md:flex md:items-center md:space-x-4",
                    children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_link5.default, {
                      href: item.href || "#",
                      className: classNames(
                        router.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      ),
                      "aria-current": router.pathname === item.href ? "page" : void 0,
                      children: item.name
                    }, item.name))
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "flex items-center",
                children: [
                  !isAuthenticated && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                    className: "flex-shrink-0",
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
                      type: "button",
                      onClick: onClickLogin,
                      className: "relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                        children: "Login"
                      })
                    })
                  }),
                  user && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                    className: "hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
                        type: "button",
                        className: "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                            className: "sr-only",
                            children: "View notifications"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_outline.BellIcon, {
                            className: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ]
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react3.Menu, {
                        as: "div",
                        className: "relative ml-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react3.Menu.Button, {
                              className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                                  className: "sr-only",
                                  children: "Open user menu"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_image2.default, {
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
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Transition, {
                            as: import_react2.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Menu.Items, {
                              className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                              children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Menu.Item, {
                                children: ({ active }) => item.href ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_link5.default, {
                                  href: item.href,
                                  className: classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  ),
                                  children: item.name
                                }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
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
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react3.Disclosure.Panel, {
          className: "md:hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "space-y-1 px-2 pt-2 pb-3 sm:px-3",
              children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Disclosure.Button, {
                as: import_link5.default,
                href: item.href || "#",
                className: classNames(
                  router.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                ),
                "aria-current": router.pathname === item.href ? "page" : void 0,
                children: item.name
              }, item.name))
            }),
            user && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "border-t border-gray-700 pt-4 pb-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className: "flex items-center px-5 sm:px-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                      className: "flex-shrink-0",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_image2.default, {
                        className: "h-10 w-10 rounded-full border",
                        src: user.avatarUrl,
                        alt: "",
                        height: 40,
                        width: 40,
                        unoptimized: true
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                      className: "ml-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                          className: "text-base font-medium text-white",
                          children: user.name
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                          className: "text-sm font-medium text-gray-400",
                          children: user.email
                        })
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
                      type: "button",
                      className: "ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                          className: "sr-only",
                          children: "View notifications"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_outline.BellIcon, {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className: "mt-3 space-y-1 px-2 sm:px-3",
                  children: userNavigation.map(
                    (item) => item.href ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Disclosure.Button, {
                      as: import_link5.default,
                      href: item.href,
                      className: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",
                      children: item.name
                    }, item.name) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react3.Disclosure.Button, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthLayout,
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
});
