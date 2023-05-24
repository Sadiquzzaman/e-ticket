export declare class BcryptService {
    private readonly saltRounds;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hashPassword: string): Promise<boolean>;
}
