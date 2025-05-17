import { HomeIcon } from 'lucide-react';
import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../../../../components/ui/breadcrumb';
import { Card, CardContent } from '../../../../components/ui/card';

export const TitlebarByAnima = (): JSX.Element => {
  return (
    <Card className="w-full p-0 bg-blackwhite rounded-3xl shadow-light-theme-shadow-medium">
      <CardContent className="flex items-center justify-between gap-4 p-[30px]">
        <h1 className="text-blackblack-100 text-base tracking-[-0.32px] leading-[22.4px] font-normal">
          Chip
        </h1>

        <Breadcrumb className="flex items-center justify-end">
          <BreadcrumbList>
            <BreadcrumbItem>
              <HomeIcon className="w-[22px] h-[22px]" />
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-blackblack-100 text-base tracking-[-0.32px] leading-[22.4px]" />

            <BreadcrumbItem>
              <Badge className="bg-light-themeprimarylight-blue text-light-themeprimaryblue rounded-sm px-2 py-0.5">
                <span className="text-xs tracking-[-0.12px] leading-[16.8px] font-normal">
                  Chip
                </span>
              </Badge>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CardContent>
    </Card>
  );
};
