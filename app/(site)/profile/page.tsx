import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { data } from "../../(data)/data";
export default function Home() {
  
  const maskEmail = (email: string): string => {
    const [name, domain] = email.split("@");
    if (name.length <= 4) return `${"^".repeat(name.length)}@${domain}`;

    const masked = `${name.slice(0, 2)}${"^".repeat(
      name.length - 4
    )}${name.slice(-2)}`;
    return `${masked}@${domain}`;
  };

  return (
    <div className="p-1">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md border-2 border-orange-400 w-full lg:self-stretch">
          <h1 className="mb-3 font-semibold text-base md:text-lg">
            Company details
          </h1>
          <div className="flex flex-row gap-4">
            <div className="relative w-[100px] h-[100px] sm:w-[125px] sm:h-[125px]">
              <Image
                alt="profile-img"
                src={data.companyDetails.profileImg}
                width={125}
                height={125}
                className="rounded-full border-2 border-gray-700"
              />
              <FaEdit
                size={30}
                className="absolute bottom-0 right-0 p-1 text-black cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm md:text-base">
              <p className="font-semibold">
                Operator ID:
                <span className="mx-2 font-normal">
                  {data.companyDetails.operatorID.toString()}
                </span>
              </p>
              <p className="font-semibold">
                Company Number:
                <span className="mx-2 font-normal">
                  {data.companyDetails.companyNumber.toString()}
                </span>
              </p>
              <p className="font-semibold">
                Legal Name:
                <span className="mx-2 font-normal">
                  {data.companyDetails.legalName}
                </span>
              </p>
              <p className="font-semibold">
                TAT Number:
                <span className="mx-2 font-normal">
                  {data.companyDetails.tatNumber}
                </span>
              </p>
              <p className="font-semibold">
                VAT Number:
                <span className="mx-2 font-normal">
                  {data.companyDetails.vatNumber.toString()}
                </span>
              </p>
              <p className="font-semibold">
                Address:
                <span className="mx-2 font-normal">
                  {data.companyDetails.address}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="relative p-4 bg-white rounded-lg shadow-md border-2 border-orange-400 w-full">
            <FaEdit
              size={30}
              className="absolute top-2 right-2 cursor-pointer text-black"
            />
            <h1 className="mb-3 font-semibold text-lg">Bank details</h1>
            <div>
              <p className="text-md font-semibold">
                Account Type:
                <span className="mx-3 font-normal">
                  {data.bankDetails.accountType}
                </span>
              </p>
              <p className="text-md font-semibold">
                Bank Name:
                <span className="mx-3 font-normal">
                  {data.bankDetails.bankName}
                </span>
              </p>
              <p className="text-md font-semibold">
                Account Name:
                <span className="mx-3 font-normal">
                  {data.bankDetails.accountName}
                </span>
              </p>
              <p className="text-md font-semibold">
                Account Number:
                <span className="mx-3 font-normal">
                  {data.bankDetails.accountNumber}
                </span>
              </p>
            </div>
          </div>

          <div className="relative p-4 bg-white rounded-lg shadow-md border-2 border-orange-400 w-full">
            <FaEdit
              size={30}
              className="absolute top-2 right-2 cursor-pointer text-black"
            />
            <h1 className="mb-3 font-semibold text-lg">Contact details</h1>
            <div>
              <p className="text-md font-semibold">
                Company Owner Name:
                <span className="mx-3 font-normal">
                  {data.contactDetails.companyOwnerName}
                </span>
              </p>
              <p className="text-md font-semibold">
                Phone Number:
                <span className="mx-3 font-normal">
                  {data.contactDetails.phoneNumber.toString()}
                </span>
              </p>
              <p className="text-md font-semibold">
                Office Phone Number:
                <span className="mx-3 font-normal">
                  {data.contactDetails.officePhoneNumber.toString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative p-4 mt-4 bg-white rounded-lg shadow-md border-2 border-orange-400 w-full">
        <FaEdit
          size={30}
          className="absolute top-2 right-2 cursor-pointer text-black"
        />
        <h1 className="mb-3 font-semibold text-lg">Settings</h1>
        <div>
          <p className="text-md font-semibold">
            Change Password:
            <span className="mx-3 font-normal">
              {"^".repeat(data.Settings.changePassword.length)}
            </span>
          </p>
          <p className="text-md font-semibold">
            Change Mail:
            <span className="mx-3 font-normal">
              {maskEmail(data.Settings.changeMail)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
