import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import 'crypto-pouch';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db: PouchDB;

  constructor() {
    // Initialize the PouchDB instance
    this.db = new PouchDB('BudleyDev');
    // Initialize encryption
    this.initEncryption();
  }

  private initEncryption() {
    // Use a secure method to retrieve your encryption key
    const encryptionKey = this.getEncryptionKey();

    // Enable encryption on your PouchDB instance
    this.db.crypto(encryptionKey).then(() => {
      console.log('Database encryption is enabled');
    }).catch((error) => {
      console.error('Error enabling encryption:', error);
    });
  }

  private getEncryptionKey(): string {
    // TODO: Implement a secure way to retrieve your encryption key
    // NEVER hardcode your key in production!
    return 'my_secret_key';
  }

  // Example function to add a document
  public addDocument(doc: any): Promise<any> {
    return this.db.put(doc);
  }

  // Example function to retrieve a document
  public getDocument(id: string): Promise<any> {
    return this.db.get(id);
  }

  // Add other database operations as needed
}
