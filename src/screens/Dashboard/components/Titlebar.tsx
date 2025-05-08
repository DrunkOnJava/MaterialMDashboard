import { HomeIcon, ShoppingBag } from "lucide-react";
import React from "react";
import { Badge } from "../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import { Card, CardContent } from "../../../components/ui/card";

interface TitlebarProps {
  title: string;
}

export const TitlebarByAnima = ({ title }: TitlebarProps): JSX.Element => {
  return (
    <Card className="w-full p-0 bg-blackwhite rounded-3xl shadow-light-theme-shadow-medium">
      <CardContent className="flex items-center justify-between gap-4 p-[30px]">
        <h1 className="text-blackblack-100 text-2xl tracking-[-0.32px] leading-[22.4px] font-medium">
          {title}
        </h1>

        <Breadcrumb className="flex items-center justify-end">
          <BreadcrumbList>
            <BreadcrumbItem>
              <HomeIcon className="w-[22px] h-[22px]" />
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-blackblack-100 text-base tracking-[-0.32px] leading-[22.4px]" />

            <BreadcrumbItem>
              <ShoppingBag className="w-[18px] h-[18px] mr-2" />
              <span className="text-light-themeprimaryblue font-medium">eCommerce</span>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-blackblack-100 text-base tracking-[-0.32px] leading-[22.4px]" />

            <BreadcrumbItem>
              <Badge className="bg-light-themeprimarylight-blue text-light-themeprimaryblue rounded-sm px-2 py-0.5">
                <span className="text-xs tracking-[-0.12px] leading-[16.8px] font-normal">
                  {title}
                </span>
              </Badge>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CardContent>
    </Card>
  );
};