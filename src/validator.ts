
class ValidationContract {
    private errors: Array<{ message: string }> = [];

    public isRequired(value: any, message: string): void {
        if (!value || value.length <= 0) {
          this.errors.push({ message });
        }
    }
    
    public isNumber(value: any, message: string): void {
      if (isNaN(value)) {
        this.errors.push({ message });
      }
    }

    public isString(value: any, message: string): void {
      if (typeof value !== 'string') {
        this.errors.push({ message });
      }
    }
  
    public hasMinLen(value: any, min: number, message: string): void {
      if (!value || value.length < min) {
        this.errors.push({ message });
      }
    }
  
    public hasMaxLen(value: any, max: number, message: string): void {
      if (!value || value.length > max) {
        this.errors.push({ message });
      }
    }
  
    public isFixedLen(value: any, len: number, message: string): void {
      if (value.length !== len) {
        this.errors.push({ message });
      }
    }
  
    public isEmail(value: string, message: string): void {
      const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
      if (!reg.test(value)) {
        this.errors.push({ message });
      }
    }

    public isUrl(value: string, message: string): void {
        const reg = new RegExp(
          /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
        );
        if (!reg.test(value)) {
          this.errors.push({ message });
        }
    }
  
    public isPhone(value: string, message: string): void {
      const reg = new RegExp(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/);
      if (!reg.test(value)) {
        this.errors.push({ message });
      }
    }
  
    public isCEP(value: string, message: string): void {
      const reg = new RegExp(/^[0-9]{8}$/);
      if (!reg.test(value)) {
        this.errors.push({ message });
      }
    }
  
    public errorList(): Array<{ message: string }> {
      return this.errors;
    }
  
    public clear(): void {
      this.errors = [];
    }
  
    public isValid(): boolean {
      return this.errors.length === 0;
    }
  }
  
  export default ValidationContract;