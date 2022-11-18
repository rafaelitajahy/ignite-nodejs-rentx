interface IDateProvider {
  compareInHours(start_date: Date, and_date: Date): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
}

export { IDateProvider };
