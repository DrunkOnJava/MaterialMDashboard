import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

// Define chip data for reusability
const filledChips = [
  {
    icon: "M",
    text: "Default Filled",
    variant: "default",
    hasCloseButton: false,
  },
  {
    icon: "M",
    text: "Default Filled",
    variant: "default",
    hasCloseButton: true,
  },
  {
    icon: "avatar",
    text: "Primary Filled",
    variant: "primary",
    hasCloseButton: false,
  },
  {
    icon: "avatar",
    text: "Primary Deletable",
    variant: "primary",
    hasCloseButton: true,
  },
  {
    icon: "smile",
    text: "Secondary Filled",
    variant: "secondary",
    hasCloseButton: false,
  },
  {
    icon: "smile",
    text: "Secondary Deletable",
    variant: "secondary",
    hasCloseButton: true,
  },
  {
    icon: "avatar",
    text: "Default Filled",
    variant: "success",
    hasCloseButton: false,
  },
  {
    icon: "avatar",
    text: "Default Deletable",
    variant: "success",
    hasCloseButton: true,
  },
  {
    icon: "smile",
    text: "Default Filled",
    variant: "alert",
    hasCloseButton: false,
  },
  {
    icon: "smile",
    text: "Default Deletable",
    variant: "alert",
    hasCloseButton: true,
  },
  {
    icon: "avatar",
    text: "Default Filled",
    variant: "warning",
    hasCloseButton: false,
  },
  {
    icon: "avatar",
    text: "Default Deletable",
    variant: "warning",
    hasCloseButton: true,
  },
];

const outlinedChips = [
  {
    icon: "M",
    text: "Default Filled",
    variant: "default",
    hasCloseButton: false,
  },
  {
    icon: "M",
    text: "Default Filled",
    variant: "default",
    hasCloseButton: true,
  },
  {
    icon: "avatar",
    text: "Primary Filled",
    variant: "primary",
    hasCloseButton: false,
  },
  {
    icon: "avatar",
    text: "Primary Deletable",
    variant: "primary",
    hasCloseButton: true,
  },
  {
    icon: "smile",
    text: "Secondary Filled",
    variant: "secondary",
    hasCloseButton: false,
  },
  {
    icon: "smile",
    text: "Secondary Deletable",
    variant: "secondary",
    hasCloseButton: true,
  },
  {
    icon: "avatar",
    text: "Default Filled",
    variant: "success",
    hasCloseButton: false,
  },
  {
    icon: "avatar",
    text: "Default Deletable",
    variant: "success",
    hasCloseButton: true,
  },
  {
    icon: "smile",
    text: "Default Filled",
    variant: "alert",
    hasCloseButton: false,
  },
  {
    icon: "smile",
    text: "Default Deletable",
    variant: "alert",
    hasCloseButton: true,
  },
  {
    icon: "avatar",
    text: "Default Filled",
    variant: "warning",
    hasCloseButton: false,
  },
  {
    icon: "avatar",
    text: "Default Deletable",
    variant: "warning",
    hasCloseButton: true,
  },
];

const customIconChips = [
  { icon: "M", text: "Custom Icon", variant: "primary", customIcon: "check" },
  {
    icon: "S",
    text: "Default Filled",
    variant: "secondary",
    customIcon: "doubleCheck",
  },
];

const customOutlinedIconChips = [
  { icon: "M", text: "Custom Icon", variant: "primary", customIcon: "check" },
  {
    icon: "S",
    text: "Default Filled",
    variant: "secondary",
    customIcon: "doubleCheck",
  },
];

const disabledChips = [
  {
    icon: "M",
    text: "Custom Icon",
    variant: "default",
    hasCloseButton: true,
    disabled: true,
  },
  {
    icon: "S",
    text: "Default Filled",
    variant: "primary",
    hasCloseButton: true,
    disabled: true,
  },
];

const sizeChips = [
  { text: "Small", variant: "primary", size: "small" },
  { text: "Medium", variant: "primary", size: "medium" },
];

export const DetailsByAnima = (): JSX.Element => {
  return (
    <Card className="w-full rounded-3xl shadow-light-theme-shadow-medium">
      <CardHeader className="border-b border-[#111c2d1a] px-[30px] py-5">
        <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
          Accordian
        </CardTitle>
      </CardHeader>

      <CardContent className="p-[30px] flex flex-col gap-[30px]">
        <Card className="rounded-3xl overflow-hidden border border-solid border-[#111c2d1a]">
          <CardHeader className="border-b border-[#111c2d1a] px-[30px] py-5">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Filled
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[30px] flex flex-wrap gap-[12px] border border-solid border-[#111c2d1a]">
            {filledChips.map((chip, index) => (
              <div
                key={`filled-${index}`}
                className={`inline-flex h-10 items-center justify-center gap-2 px-2 py-0 rounded-lg ${
                  chip.variant === "default"
                    ? "bg-blackblack-10"
                    : chip.variant === "primary"
                      ? "bg-light-themesecondarypurple"
                      : chip.variant === "secondary"
                        ? "bg-light-themeprimaryblue"
                        : chip.variant === "success"
                          ? "bg-actionsuccess"
                          : chip.variant === "alert"
                            ? "bg-actionalert"
                            : "bg-actionwarning"
                }`}
              >
                {chip.icon === "M" && (
                  <div className="relative w-[26px] h-6">
                    <div className="relative w-6 h-6 bg-blackblack-40 rounded-xl">
                      <div className="text-blackblack-40 absolute top-0.5 left-1.5 font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap">
                        M
                      </div>
                    </div>
                  </div>
                )}
                {chip.icon === "avatar" && (
                  <div
                    className={`relative w-6 h-6 bg-cover bg-[50%_50%] ${
                      chip.variant === "primary"
                        ? "bg-[url(/ellipse-178-7.png)]"
                        : chip.variant === "success"
                          ? "bg-[url(/ellipse-178-9.png)]"
                          : "bg-[url(/ellipse-178-11.png)]"
                    }`}
                  />
                )}
                {chip.icon === "smile" && (
                  <img
                    className="relative w-6 h-6"
                    alt="Ant design smile"
                    src="/ant-design-smile-outlined.svg"
                  />
                )}
                <div
                  className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap ${
                    chip.variant === "default"
                      ? "text-blackblack-100"
                      : "text-blackwhite"
                  }`}
                >
                  {chip.text}
                </div>
                {chip.hasCloseButton &&
                  (chip.variant === "default" ? (
                    <div className="bg-colors-for-light-themeblack-shadesblack-10 rounded-xl relative w-6 h-6">
                      <img
                        className="absolute w-4 h-4 top-1 left-1"
                        alt="Material symbols close"
                        src="/material-symbols-close.svg"
                      />
                    </div>
                  ) : (
                    <div className="relative w-6 h-6">
                      <div className="relative h-6 rounded-xl">
                        <div className="absolute w-6 h-6 top-0 left-0 bg-blackwhite rounded-xl opacity-60" />
                        <img
                          className="absolute w-4 h-4 top-1 left-1"
                          alt="Material symbols close"
                          src="/material-symbols-close.svg"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl overflow-hidden border border-solid border-[#111c2d1a]">
          <CardHeader className="border border-solid border-[#111c2d1a] px-[30px] py-5">
            <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
              Outlined
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[30px] flex flex-wrap gap-[12px] border border-solid border-[#111c2d1a]">
            {outlinedChips.map((chip, index) => (
              <div
                key={`outlined-${index}`}
                className={`inline-flex h-10 items-center justify-center gap-2 px-2 py-0 rounded-lg border border-solid ${
                  chip.variant === "default"
                    ? "border-[#111c2d]"
                    : chip.variant === "primary"
                      ? "border-[#8865e5]"
                      : chip.variant === "secondary"
                        ? "border-[#00a1ff]"
                        : chip.variant === "success"
                          ? "border-[#00ceb6]"
                          : chip.variant === "alert"
                            ? "border-[#ffb900]"
                            : "border-[#ff6692]"
                }`}
              >
                {chip.icon === "M" && (
                  <div className="relative w-[26px] h-6">
                    <div className="relative w-6 h-6 bg-blackblack-40 rounded-xl">
                      <div className="text-blackblack-60 absolute top-0.5 left-1.5 font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap">
                        M
                      </div>
                    </div>
                  </div>
                )}
                {chip.icon === "avatar" && (
                  <div
                    className={`relative w-6 h-6 bg-cover bg-[50%_50%] ${
                      chip.variant === "primary"
                        ? "bg-[url(/ellipse-178-7.png)]"
                        : chip.variant === "success"
                          ? "bg-[url(/ellipse-178-9.png)]"
                          : "bg-[url(/ellipse-178-11.png)]"
                    }`}
                  />
                )}
                {chip.icon === "smile" && (
                  <img
                    className="relative w-6 h-6"
                    alt="Ant design smile"
                    src="/ant-design-smile-outlined.svg"
                  />
                )}
                <div
                  className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap ${
                    chip.variant === "default"
                      ? "text-blackblack-100"
                      : chip.variant === "primary"
                        ? "text-light-themesecondarypurple"
                        : chip.variant === "secondary"
                          ? "text-light-themeprimaryblue"
                          : chip.variant === "success"
                            ? "text-actionsuccess"
                            : chip.variant === "alert"
                              ? "text-actionalert"
                              : "text-actionwarning"
                  }`}
                >
                  {chip.text}
                </div>
                {chip.hasCloseButton &&
                  (chip.variant === "default" ? (
                    <div className="bg-blackblack-10 rounded-xl relative w-6 h-6">
                      <img
                        className="absolute w-4 h-4 top-1 left-1"
                        alt="Material symbols close"
                        src="/material-symbols-close.svg"
                      />
                    </div>
                  ) : (
                    <div
                      className={`rounded-xl relative w-6 h-6 ${
                        chip.variant === "primary"
                          ? "bg-light-themesecondarypurple"
                          : chip.variant === "secondary"
                            ? "bg-light-themeprimaryblue"
                            : chip.variant === "success"
                              ? "bg-actionsuccess"
                              : chip.variant === "alert"
                                ? "bg-actionalert"
                                : "bg-actionwarning"
                      }`}
                    >
                      <img
                        className="absolute w-4 h-4 top-1 left-1"
                        alt="Material symbols close"
                        src="/material-symbols-close.svg"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-[30px]">
          <Card className="flex-1 min-w-[246px] rounded-3xl overflow-hidden border border-solid border-[#111c2d1a]">
            <CardHeader className="border border-solid border-[#111c2d1a] px-[30px] py-5">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Custom Icon
              </CardTitle>
            </CardHeader>
            <CardContent className="p-[30px] flex flex-wrap gap-[12px] border border-solid border-[#111c2d1a]">
              {customIconChips.map((chip, index) => (
                <div
                  key={`custom-${index}`}
                  className={`inline-flex h-10 items-center justify-center gap-2 px-2 py-0 rounded-lg ${
                    chip.variant === "primary"
                      ? "bg-light-themesecondarypurple"
                      : "bg-light-themeprimaryblue"
                  }`}
                >
                  <div className="relative w-[26px] h-6">
                    <div
                      className={`relative w-6 h-6 rounded-xl ${
                        chip.variant === "primary"
                          ? "bg-light-themesecondarypurple-hover"
                          : "bg-light-themeprimaryblue-hover"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 ${chip.icon === "M" ? "left-1.5" : "left-[7px]"} font-normal text-blackwhite text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap`}
                      >
                        {chip.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-blackwhite relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap">
                    {chip.text}
                  </div>
                  {chip.customIcon === "check" ? (
                    <img
                      className="relative w-6 h-6"
                      alt="Material symbols check"
                      src="/material-symbols-check.svg"
                    />
                  ) : (
                    <img
                      className="relative w-6 h-6"
                      alt="Akar icons double check"
                      src="/akar-icons-double-check.svg"
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="flex-1 min-w-[246px] rounded-3xl overflow-hidden border border-solid border-[#111c2d1a]">
            <CardHeader className="border border-solid border-[#111c2d1a] px-[30px] py-5">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Custom outlined Icon
              </CardTitle>
            </CardHeader>
            <CardContent className="p-[30px] flex flex-wrap gap-[12px] border border-solid border-[#111c2d1a]">
              {customOutlinedIconChips.map((chip, index) => (
                <div
                  key={`custom-outlined-${index}`}
                  className={`inline-flex h-10 items-center justify-center gap-2 px-2 py-0 rounded-lg border border-solid ${
                    chip.variant === "primary"
                      ? "border-[#8865e5]"
                      : "border-[#00a1ff]"
                  }`}
                >
                  <div className="relative w-[26px] h-6">
                    <div
                      className={`relative w-6 h-6 rounded-xl ${
                        chip.variant === "primary"
                          ? "bg-light-themesecondarypurple"
                          : "bg-light-themeprimaryblue"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 ${chip.icon === "M" ? "left-1.5" : "left-[7px]"} font-normal text-blackwhite text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap`}
                      >
                        {chip.icon}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap ${
                      chip.variant === "primary"
                        ? "text-light-themesecondarypurple"
                        : "text-light-themeprimaryblue"
                    }`}
                  >
                    {chip.text}
                  </div>
                  {chip.customIcon === "check" ? (
                    <img
                      className="relative w-6 h-6"
                      alt="Material symbols check"
                      src="/material-symbols-check.svg"
                    />
                  ) : (
                    <img
                      className="relative w-6 h-6"
                      alt="Akar icons double check"
                      src="/akar-icons-double-check.svg"
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-[30px]">
          <Card className="flex-1 min-w-[246px] rounded-3xl overflow-hidden border border-solid border-[#111c2d1a]">
            <CardHeader className="border border-solid border-[#111c2d1a] px-[30px] py-5">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Disabled
              </CardTitle>
            </CardHeader>
            <CardContent className="p-[30px] flex flex-wrap gap-[12px] border border-solid border-[#111c2d1a]">
              {disabledChips.map((chip, index) => (
                <div
                  key={`disabled-${index}`}
                  className={`inline-flex h-10 items-center justify-center gap-2 px-2 py-0 rounded-lg ${
                    chip.variant === "default"
                      ? "bg-blackblack-10"
                      : "bg-light-themesecondarypurple opacity-60"
                  }`}
                >
                  <div className="relative w-[26px] h-6">
                    <div
                      className={`relative w-6 h-6 rounded-xl ${
                        chip.variant === "default"
                          ? "bg-blackblack-20"
                          : "bg-light-themesecondarypurple-hover"
                      }`}
                    >
                      <div
                        className={`${chip.variant === "default" ? "opacity-[0.56] text-blackblack-40" : "text-blackwhite"} absolute top-0.5 ${chip.icon === "M" ? "left-1.5" : "left-[7px]"} font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap`}
                      >
                        {chip.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-blackwhite relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[21px] whitespace-nowrap">
                    {chip.text}
                  </div>
                  {chip.hasCloseButton &&
                    (chip.variant === "default" ? (
                      <div className="bg-blackblack-20 rounded-xl relative w-6 h-6">
                        <img
                          className="absolute w-4 h-4 top-1 left-1"
                          alt="Material symbols close"
                          src="/material-symbols-close.svg"
                        />
                      </div>
                    ) : (
                      <div className="relative w-6 h-6">
                        <div className="relative h-6 rounded-xl">
                          <div className="absolute w-6 h-6 top-0 left-0 bg-blackwhite rounded-xl opacity-60" />
                          <img
                            className="absolute w-4 h-4 top-1 left-1"
                            alt="Material symbols close"
                            src="/material-symbols-close.svg"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="flex-1 min-w-[246px] min-h-[164px] rounded-3xl overflow-hidden border border-solid border-[#111c2d1a]">
            <CardHeader className="border border-solid border-[#111c2d1a] px-[30px] py-5">
              <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                Sizes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-[30px] flex flex-wrap items-center gap-[12px] border border-solid border-[#111c2d1a]">
              <div className="h-8 gap-1 px-4 py-0 bg-light-themesecondarypurple rounded-xl inline-flex items-center">
                <div className="inline-flex items-center">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-blackwhite text-xs tracking-[-0.12px] leading-[16.8px] whitespace-nowrap">
                    Small
                  </div>
                </div>
              </div>
              <div className="h-9 gap-1 px-4 py-0 bg-light-themesecondarypurple rounded-xl inline-flex items-center">
                <div className="inline-flex items-center">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-blackwhite text-[15px] tracking-[-0.15px] leading-[21px] whitespace-nowrap">
                    Medium
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
