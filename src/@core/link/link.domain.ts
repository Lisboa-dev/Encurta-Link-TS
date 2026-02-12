export default class Link {
    private _id: string;
    private _shortUrl: string;
    private _createDate?: string;
    private _updateDate: String;
    private _url:String

    get id() {
        return this._id;
      }
    
      get shortUrl() {
        return this._shortUrl;
      }
    
      get createDate(): string | undefined {
        return this._createDate;
      }
    
      get updateDate() {
        return this._updateDate;
      }
    
      get url() {
        return this._url;
      }
    
      set id(id: string) {
        this._id = id;
      }
    
      set shortUrl(shortUrl: string) {
        this._shortUrl = shortUrl;
      }
    
      set createDate(createDate: string) {
        this._createDate = createDate;
      }
    
      set updateDate(updateDate: String) {
        this._updateDate = updateDate;
      }
    
      set url(url: String) {
        this._url = url;
      }


    create(originalUrl:string){
       this._id = this.generateId();
       this._shortUrl = this.generateShortUrl();
       this._createDate = new Date().toISOString();
       this._url = this.VerifyOriginalUrl(originalUrl);
   }


   private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private generateShortUrl(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private VerifyOriginalUrl(originalUrl: string): string {
    if (originalUrl.startsWith("http://") || originalUrl.startsWith("https://")) {
      return originalUrl;
    } else {
      return "http://" + originalUrl;
    }
  }
}

