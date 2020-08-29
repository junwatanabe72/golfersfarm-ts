import { TitleText, TopConceptText, TopUsageText } from '../../../utils/constant/text/body/top';

type ITEXTTYPE = typeof TopTitleText.TitleText | typeof TopConceptText.ConceptText;

interface TOPTITLETYPE {
  TitleTitle: typeof TopTitleText.TitleTitle;
  TitleText: typeof TopTitleText.TitleText;
  TitleLink: typeof TopTitleText.TitleLink;
}

interface TOPCONCEPTTYPE {
  ConceptText: typeof TopConceptText.ConceptText;
  ConceptTitle: typeof TopConceptText.ConceptTitle;
  ConceptLink: typeof TopConceptText.ConceptLink;
}
interface TOPUSAGETYPE {
  UsageTitle: typeof TopUsageText.UsageTitle;
  UsageItem: typeof TopUsageText.UsageItem;
}
