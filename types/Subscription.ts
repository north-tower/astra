import { DocumentData, DocumentReference, Timestamp } from "firebase-admin/firestore";

export interface Subscription {
    id?: string;
    price: DocumentReference<DocumentData>;
    role: 'pro' | 'no';
    status: string | null;
    amount: DocumentReference<DocumentData>;
}