import { SupportedImplementations } from "@/app/contracts";
import { UseFormReturn } from "react-hook-form";

export interface ICreateJarFormInput {
  cookieJar: SupportedImplementations;
  receiver: string;
  title: string;
  description: string;
  link: string;
  cookiePeriod: number;
  cookieAmount: string;
  cookieToken: string;
  donation: boolean;
  donationAmount?: string;
}

export interface ICreateJarFormInputERC20 {
  erc20Token: string;
  erc20Threshold: string;
}

// 5. address _erc721addr,
// 6. uint256 _threshold
export interface ICreateJarFormInputERC721 {
  erc721Token: string;
  erc721Threshold: string;
}

export interface SegmentCookieMetaProps<
  T extends ICreateJarFormInput &
    (ICreateJarFormInputERC20 | ICreateJarFormInputERC721)
> {
  form: UseFormReturn<T>;
}
