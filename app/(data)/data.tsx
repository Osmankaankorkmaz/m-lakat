export interface Data {
  companyDetails: {
    profileImg: string;
    operatorID: number;
    companyNumber: number;
    legalName: string;
    tatNumber: string;
    vatNumber:number;
    address: string;
  };
  bankDetails: {
    accountType: "Bireysel" | "şirket";
    bankName:
      | "Kasikorn bank"
      | "Garanti BBVA"
      | "Ziraat"
      | "Akbank"
      | "HSBC"
      | "QNB Finansbank"
      | "Vakıfbank"
      | "İşbank"
      | "Yapı Kredi"
      | "Denizbank"
      | "ING"
      | "TEB"
      | "Şekerbank"
      | "Halkbank"
      | "Alternatifbank";
    accountName: string;
    accountNumber: number;
  };
  contactDetails: {
    companyOwnerName: string;
    phoneNumber: number;
    officePhoneNumber: number;
  };
  Settings: {
    changePassword: string;
    changeMail: string;
  };
}

export const data: Data = {
  companyDetails: {
    profileImg: "/profile.png",
    operatorID: 2324234234,
    companyNumber: 4535365654456,
    legalName: "Kamil Koç Co. Ltd.",
    tatNumber: "23/4536536",
    vatNumber: 3463563635635635,
    address:
      "Atatürk Bulvarı, 1234 Sokak Ayden Apartmanı No:23 Gayrettepe, İstanbul",
  },
  bankDetails: {
    accountType: "Bireysel",
    bankName: "Alternatifbank",
    accountName: "Hakan Kizilkaya",
    accountNumber: 3635635635,
  },
  contactDetails: {
    companyOwnerName: "Hakan Kizilkaya",
    phoneNumber: 905555555555,
    officePhoneNumber: 902125555555,
  },
  Settings: {
    changePassword: "tripkolic",
    changeMail: "Hakankizilkaya@gmail.com",
  },
};
