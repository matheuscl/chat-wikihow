const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');

const AssistantV2 = require('ibm-watson/assistant/v2');


const text = "Como emagrecer fazendo sexo?";

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  iam_apikey: '05_GHyPiq-LoHysh4PIj_Q5TjYyuAArBHLLkeQQOY5tQ',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});

const analyzeParams = {
    text: text,
    features: {
        concepts: {},
        emotion: {},
        keywords: {
          sentiment: {},
          emotion: {}
        },
        entities: {}

    }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });







  const service = new AssistantV2({
    version: '2019-02-28',
    iam_apikey: 'kbEhqWsc1cNmaW3iPySWwPzfTpj2uekBlWMIUgk1x0Uq',
    url: 'https://gateway.watsonplatform.net/assistant/api'
  });


  service.createSession({
  assistant_id: 'f26fca4e-850b-42db-b97b-d1fcfd0f0716'
})
  .then(res => {
    let session_id = res.session_id;
    service.message({
      assistant_id: 'f26fca4e-850b-42db-b97b-d1fcfd0f0716',
      session_id: session_id,
      input: {
        'message_type': 'text',
        'text': text
        }
      })
      .then(res => {
        console.log(JSON.stringify(res, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });
  /*
*/
