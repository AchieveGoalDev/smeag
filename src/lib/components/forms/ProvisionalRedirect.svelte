<div class="courseBox">
  <div class="ttl">過去受講歴</div>
  
  <div class="comment wpcf7c-elm-step1">過去にToyo Achieve Englishの
  通年コース又は、半期コースを受講したことがありますか。
  ご自身でご確認いただき、対象の学生は「あり」にチェックをし
  直近の過去受講歴をお答えください。</div>
  <dl class="attendBox">
  <dt>過去受講歴 <span class="must">（必須）</span></dt>
  <dd>[checkbox* attend_history id:attend_history class:attend_history use_label_element exclusive "あり" "なし"]</dd>
  <dt class="attend_detail">直近受講年度</dt>
  <dd class="attend_detail">[select attend_year id:attend_year class:attend_year include_blank "2015" "2016" "2017" "2018" "2019" "2020" "2021" "2022" "2023"]<span class="txt">年</span></dd>
  <dt class="attend_detail">直近受講キャンパス</dt>
  <dd class="attend_detail">[select attend_campus id:attend_campus class:attend_campus include_blank "白山キャンパス" "川越キャンパス" "板倉キャンパス" "INIADキャンパス" "WELLBキャンパス" "オンライン限定"]</dd>
  <dt class="attend_detail">直近受講コース</dt>
  <dd class="attend_detail">[select attend_course id:attend_course class:attend_course include_blank "グループレッスン・初級" "グループレッスン・初中級(2022年度まで)" "グループレッスン・中級" "グループレッスン・上級" "平日マンツーマンレッスン" "土曜マンツーマンレッスン(2022年度まで)"]</dd>
  </dl>
  
  <div class="ttl">受講希望時間選択</div>
  <div class="comment wpcf7c-elm-step1">一部の学部/学科ではクォーター制が導入されております。
  ご自身でご確認いただき、対象の学生は「あり」にチェックをお願いいたします。
  クォーター変更の際に時間割変更のご連絡を差し上げます。</div>
  <dl class="quarterBox">
  <dt>時間割変更の有無<span class="must">（必須）</span></dt>
  <dd>[checkbox* quarter id:quarter use_label_element exclusive "あり" "なし"]</dd>
  </dl>
  
  <div class="comment wpcf7c-elm-step1">月曜日から金曜日まで、ご希望の受講時間を選択してください。
  各曜日、第3希望までの選択が必須ですが、ご希望に添えない場合があります。
  なお、<u>第1希望から第3希望は必ず違う時間帯を選択してください。</u></div>
  <table width="100%" border="0">
  <tr>
  <th rowspan="3" scope="row">月曜日</th>
  <td class="choice">第1希望<span class="must">（必須）</span></td>
  <td>[select* mon-first class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第2希望<span class="must">（必須）</span></td>
  <td>[select* mon-second class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第3希望<span class="must">（必須）</span></td>
  <td>[select* mon-third class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  
  <tr>
  <th rowspan="3" scope="row">火曜日</th>
  <td class="choice">第1希望<span class="must">（必須）</span></td>
  <td>[select* tue-first class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr></td>
  </tr>
  <tr>
  <td class="choice">第2希望<span class="must">（必須）</span></td>
  <td>[select* tue-second class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr></td>
  </tr>
  <tr>
  <td class="choice">第3希望<span class="must">（必須）</span></td>
  <td>[select* tue-third class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr></td>
  </tr>
  
  <tr>
  <th rowspan="3" scope="row">水曜日</th>
  <td class="choice">第1希望<span class="must">（必須）</span></td>
  <td>[select* wed-first class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第2希望<span class="must">（必須）</span></td>
  <td>[select* wed-second class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第3希望<span class="must">（必須）</span></td>
  <td>[select* wed-third class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  
  <tr>
  <th rowspan="3" scope="row">木曜日</th>
  <td class="choice">第1希望<span class="must">（必須）</span></td>
  <td>[select* thu-first class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第2希望<span class="must">（必須）</span></td>
  <td>[select* thu-second class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>.
  <tr>
  <td class="choice">第3希望<span class="must">（必須）</span></td>
  <td>[select* thu-third class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  
  <tr>
  <th rowspan="3" scope="row">金曜日</th>
  <td class="choice">第1希望<span class="must">（必須）</span></td>
  <td>[select* fri-first class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第2希望<span class="must">（必須）</span></td>
  <td>[select* fri-second class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  <tr>
  <td class="choice">第3希望<span class="must">（必須）</span></td>
  <td>[select* fri-third class:select-time include_blank "09:50 - 10:30" "11:30 - 12:10" "13:50 - 14:30"]</td>
  </tr>
  </tbody>
  </table>
  </div><!-- //courseBox -->
  
  
  <div class="personalBox">
  <div class="ttl">申込者情報</div>
  <div class="comment wpcf7c-elm-step1">下記必要事項を記入してください。
  <span class="notes">※本サイトでご記入いただいた個人情報は、本講座運営に関わる目的にのみ使用し、他の目的には使用いたしません。</span></div>
  
  <dl>
  <dt>学籍番号<span class="must">（必須）</span></dt>
  <dd>[text* student-number class:wid30 id:student-number minlength:10 maxlength:10]
  <span class="notes">アルファベット入力の際は大文字で入力してください。
  学籍番号がアルファベットから始まることはありません。</span>
  <span class="wpcf7-custom-item-error student-number"></span></dd>
  
  <dt>性別<span class="must">（必須）</span></dt>
  <dd>[checkbox* gender id:gender use_label_element exclusive "男" "女"]</dd>
  
  <dt>氏名<span class="must">（必須）</span></dt>
  <dd>[text* your-name class:wid80 id:your-name placeholder "山田　太郎"]</dd>
  
  <dt>フリガナ<span class="must">（必須）</span></dt>
  <dd>[text* your-name-kana class:wid80 id:your-name-kana placeholder "ヤマダ　タロウ"]</dd>
  
  <dt>英字名<span class="must">（必須）</span></dt>
  <dd><span class="txt">First Name (名前)</span>[text* your-first-name class:wid80 id:your-first-name placeholder "Taro"]
  <span class="notes">頭文字のみ大文字で入力してください。</span>
  <span class="wpcf7-custom-item-error your-first-name"></span></dd>
  
  <dd><span class="txt">Last Name (名字)</span>[text* your-last-name class:wid80 id:your-last-name placeholder "YAMADA"]
  <span class="notes">すべて大文字で入力してください。</span>
  <span class="wpcf7-custom-item-error your-last-name"></span></dd>
  
  <dt>種別<span class="must">（必須）</span></dt>
  <dd>[checkbox* assortment id:assortment use_label_element exclusive "学部生" "大学院生" "その他（通信・教職員等）"]</dd>
  
  <dt>学年<span class="must">（必須）</span></dt>
  <dd>[text* school-year class:wid30 id:school-year]<span class="txt">年生</span>
  <span class="notes">教職員の方は「教員」「職員」等と記載してください。</span>
  <span class="wpcf7-custom-item-error school-year"></span></dd>
  
  <dt>学部<span class="must">（必須）</span></dt>
  <dd>[text* department class:wid30 id:department]<span class="txt">学部</span>
  <span class="wpcf7-custom-item-error department"></span></dd>
  
  <dt>学科<span class="must">（必須）</span></dt>
  <dd>[text* course class:wid30 id:course]<span class="txt">学科</span>
  <span class="wpcf7-custom-item-error course"></span></dd>
  
  <dt>大学メールアドレス<br><span class="must">（必須）</span></dt>
  <dd>[email* your-email class:wid80 id:your-email]
  <span class="notes">大学より貸与される"@toyo.jp"、"@iniad.org"のアドレスを入力してください。</span>
  <span class="wpcf7-custom-item-error your-email"></span></dd>
  
  <dt>大学メールアドレス<br>確認用<span class="must">（必須）</span></dt>
  <dd>[email* your-email_confirm class:wid80 id:your-email_confirm]
  <span class="notes">確認のため、もう一度メールアドレスを入力してください。</span>
  <span class="wpcf7-custom-item-error your-email_confirm"></span></dd>
  
  <dt>個人メールアドレス</dt>
  <dd>[email personal-email class:wid80 id:personal-email]
  <span class="notes">大学メールアドレスへのメールが届かない場合に、連絡が可能なメールアドレスを入力してください。</span>
  <span class="wpcf7-custom-item-error your-email"></span></dd>
  
  <dt>個人メールアドレス<br>確認用</dt>
  <dd>[email personal-email_confirm class:wid80 id:personal-email_confirm]
  <span class="notes">確認のため、もう一度メールアドレスを入力してください。</span>
  <span class="wpcf7-custom-item-error your-email_confirm"></span></dd>
  
  <dt>電話番号<span class="must">（必須）</span></dt>
  <dd>[tel* your-tel class:wid50 id:your-tel]
  <span class="notes">携帯電話等、日中に連絡のとれる番号を入力ください。</span>
  <span class="wpcf7-custom-item-error your-tel"></span></dd>
  
  <dt>TOEICスコア<span class="must">（必須）</span></dt>
  <dd>[select* toeic-score id:toeic-score include_blank "〜400" "400～600" "600〜" "TOEIC受験経験なし"]
  <span class="notes">TOEIC受験経験がない方はその他の英語試験スコアを下記に記載してください。</span></dd>
  <dd>
  <dl class="studyDetail">
  <dt>英検</dt>
  <dd>[text english-proficiency-test class:wid30 id:english-proficiency-test]<span class="txt">級</span></dd>
  <dt>TOEFL</dt>
  <dd>[text toefl-test class:wid30 id:toefl-test]<span class="txt">点</span></dd>
  <dt>IELTS</dt>
  <dd>[text ielts-test class:wid30 id:ielts-test]<span class="txt">点</span></dd>
  <dt>その他</dt>
  <dd>[textarea other-test-experience class:wid100 id:other-test-experience x4]</dd>
  </dl>
  <div>[checkbox test-experience id:test-experience use_label_element "英語試験の受験経験なし"]</div>
  </dd>
  
  <dt>本プログラムを
  知ったきっかけ<span class="must">（必須）</span></dt>
  <dd>[text* trigger class:wid80 id:trigger]<span class="txt"></span>
  <span class="notes">本プログラムを知ったきっかけ記載してください。</span>
  <span class="wpcf7-custom-item-error trigger"></span></dd>
  
  <dt>備考</dt>
  <dd><span class="txt">ご質問事項等ございましたら、下記へご記入ください。</span><br />
  [textarea free-area class:wid100 id:free-area x8]</dd>
  
  </div><!-- //personalBox -->
  
  
  <div class="agreementBox">
  <div class="ttl">承諾事項</div>
  <div class="comment wpcf7c-elm-step1">下記の事項を承諾のうえ、全項目にチェックを入れてください。
  <span class="notes">※必ず全てのボックスをチェックしてください。</span></div>
  <p class="listCaption">＜受講に関して＞</p>
  <ul>
  <li><label for="agree01">[acceptance agree01 id:agree01]サポートデスクからの連絡(大学メールアドレス宛)を必ず確認すること。<br>Toyo Achieve English HPまたはメール（info@achieve-english.jp）でお知らせします。</label></li>
  <li><label for="agree02">[acceptance agree02 id:agree02]全日程、可能な限り出席すること。<br>やむを得ず欠席する場合には、必ずサポートデスクまで連絡すること。大学で認められる理由によって講座を欠席する場合は公欠届を提出すること。</label></li>
  <li><label for="agree03">[acceptance agree03 id:agree03]振替授業(Make-up Lesson)は欠席した週内の振替授業枠でのみ出席可能です。<br>その場合は出席率に反映されますが、講座終了後の補講授業(Extra Make up Lesson)は出席率に反映されません。</label></li>
  <li><label for="agree04">[acceptance agree04 id:agree04]講座開始後のコース変更、時間割変更は原則受け付けません。<br>講座開始一週間以内又は、クォーターが変わる際のみ、空席がある場合は時間割変更を承ります。</label></li>
  <li><label for="agree05">[acceptance agree05 id:agree05]講座終了後、ToyoNet-ACE内に設置する「振り返りレポート」を提出すること。</label></li>
  <li><label for="agree06">[acceptance agree06 id:agree06]進捗を計るためにも学部等で行われているTOEICを受験されることを推奨します。</label></li>
  <li><label for="agree07">[acceptance agree07 id:agree07]教材は初日レッスン時に担当講師より手渡しいたします。<br>2023年度前期と同じレベルを受講される方は、前期に使用した教材をお持ちください。</label></li>
  <li><label for="agree08">[acceptance agree08 id:agree08]受講生と講師間の連絡先の交換、SNS等でつながる事は禁止としております。</label></li>
  <li><label for="agree09">[acceptance agree09 id:agree09]今後の新型コロナウイルス感染症(COVID-19)の感染拡大状況により、講座に変更が生じる可能性がございます。</label></li>
  </ul>
  
  <p class="listCaption">＜キャンセルポリシー＞</p>
  <ul>
  <li><label for="agree10">[acceptance agree10 id:agree10]申込後、受講料の支払いがないことをもって受講キャンセルとはならないので必ずメール（info@achieve-english.jp）にてキャンセル理由を記載の上連絡すること。</label></li>
  <li><label for="agree11">[acceptance agree11 id:agree11]受講料は、決済案内メールに記載されている期日までに必ず支払完了すること。受講意思があり、期日までに支払完了が難しい場合は、必ずサポートデスクに電話（03-5365-2239）またはメール（info@achieve-english.jp）で連絡すること。</label></li>
  <li><label for="agree12">[acceptance agree12 id:agree12]いかなる理由があっても受講料支払後のキャンセルや返金を承る事は出来ません。</label></li>
  <li><label for="agree13">[acceptance agree13 id:agree13]受講途中のキャンセルについても、残回数分の返金はいたしません。</label></li>
  
  </ul>
  <div class="attention">⚠️注意⚠️
  受講案内メールをお届けできない方が多くなっております。
  「info@achieve-english.jp」のアドレスから
  登録された大学メールアドレスへ案内メールをお送りしますので、
  上記ドメインからのメールを受信できるよう設定をお願い致します。
  ゴミ箱や迷惑メールへ入らないよう設定をお願い致します。</div>
  </div><!-- //agreementBox -->
  
  
  <p class="wpcf7c-elm-step2 submitMsg" role="alert">内容に間違いがなければ「送信する」をクリックしてください。</p>
  <div class="btnBox">[confirm class:btnConfirm "入力内容を確認する"][back class:btnBack "戻る"][submit class:btnSubmit "送信する"]</div>