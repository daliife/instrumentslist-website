export class Instrument{
  constructor(
    public article: string,
    public name: string,
    public family: string,
    public description: string,
    public photo_path: string,
    public links: string[],
    public videos: string[],
    public primary_color: string,
    public secondary_color: string,
    public text_color: string,
    public article_id: number
  ){}
}
