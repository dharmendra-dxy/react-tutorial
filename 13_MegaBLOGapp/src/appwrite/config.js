// very similar code as of "auth.js"

import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new Client();
    databases;
    storage;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // method createPost:
    async createPost({title, slug, content, featuredImg, status, userId}){
        try{

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId,
                }
            );

        } 
        catch(err){
            console.log("Appwrite service :: createPost :: Error", err);
        }
    }

    // method updatePost:
    async updatePost(slug, {title, content, featuredImg, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                }
            );
        } 
        catch(err) {
            console.log("Appwrite service :: updatePost :: Error", err);
        }
    }

    // method deletePost:
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } 
        catch(err) {
            console.log("Appwrite service :: deletePost :: Error", err);
            return false;
        }
    }

    // method getPost:
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
        } 
        catch(err) {
            console.log("Appwrite service :: getPost :: Error", err);
            return false;
        }
    }

    // if we use listPost -> we will get those all post which are not active
    // so using -> Query to get active post only:

    // method listPosts (with Query):
    async listPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } 
        catch(err) {
            console.log("Appwrite service :: listPosts :: Error", err);
            return false;
        }
    } 


    // STORAGE Methods:

    // method for file upload:
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
        } 
        catch(err) {
            console.log("Appwrite service :: uploadFile :: Error", err);
        }
    }

    // method deleteFile:
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            );
            return true;
        } 
        catch(err) {
            console.log("Appwrite service :: deleteFile :: Error", err);  
            return false;  
        }
    }

    // method getFilePreview (it is not an async task as per documentation):
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        );
    }
};




const service = new Service();

export default service;