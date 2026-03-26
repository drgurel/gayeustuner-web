import type { Locale } from "@/lib/i18n";

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  benefits: string[];
  faq: { question: string; answer: string }[];
  canonicalSlug: string;
  shortDescription: string;
}

const services: Record<string, Record<Locale, ServiceData>> = {
  "early-orthodontics": {
    tr: {
      slug: "erken-donem-ortodonti",
      title: "Erken Dönem Ortodontik Tedaviler",
      subtitle: "Pedodonti Hizmeti",
      description: [
        "Erken dönem ortodontik tedaviler, çocukların çene ve diş gelişimindeki sorunların büyüme döneminde tespit edilerek müdahale edilmesini sağlar. Bu yaklaşım sayesinde ileride ortaya çıkabilecek ciddi ortodontik problemler daha küçük müdahalelerle çözülebilir.",
        "Amerikan Ortodonti Derneği, her çocuğun 7 yaşına kadar bir ortodontik değerlendirmeden geçmesini önermektedir. Bu yaşta karışık dişlenme dönemi başlamış olup, potansiyel sorunlar erken aşamada tespit edilebilir.",
        "Çapraşık dişler, çapraz kapanış, üst çene darlığı, alt çene ileriliği veya geriliği gibi sorunlar erken dönemde çok daha kolay ve etkili şekilde tedavi edilebilir. Büyüme döneminde yapılan müdahaleler, kemik gelişiminin doğru yönlendirilmesine olanak tanır.",
        "Parmak emme, dudak emme, ağızdan nefes alma gibi kötü alışkanlıklar da diş ve çene yapısını olumsuz etkileyebilir. Bu alışkanlıkların erken dönemde kontrol altına alınması, kalıcı deformitelerin önlenmesi açısından büyük önem taşır.",
      ],
      benefits: [
        "Ciddi ortodontik sorunların önlenmesi",
        "Daha kısa ve kolay tedavi süreci",
        "Büyüme potansiyelinden yararlanma",
        "Cerrahi müdahale ihtiyacının azalması",
        "Çocuğun özgüveninin artması",
        "Kötü alışkanlıkların düzeltilmesi",
      ],
      faq: [
        {
          question: "Çocuğumu ortodontik muayeneye kaç yaşında götürmeliyim?",
          answer:
            "7 yaş, ilk ortodontik değerlendirme için ideal yaştır. Bu dönemde karışık dişlenme başlamış olup, potansiyel sorunlar erken tespit edilebilir.",
        },
        {
          question: "Erken dönem ortodonti ne kadar sürer?",
          answer:
            "Tedavi süresi sorunun türüne ve ciddiyetine göre değişmekle birlikte, genellikle 6 ay ile 18 ay arasında sürmektedir.",
        },
        {
          question: "Erken dönem tedavi yapılmazsa ne olur?",
          answer:
            "Tedavi edilmeyen ortodontik sorunlar zamanla ağırlaşabilir ve ileride daha kapsamlı, uzun süreli tedaviler hatta cerrahi müdahale gerektirebilir.",
        },
      ],
      canonicalSlug: "erken-donem-ortodonti",
      shortDescription:
        "Çocukların çene ve diş gelişimindeki sorunların büyüme döneminde tespit edilerek müdahale edilmesini sağlayan tedavi yaklaşımı.",
    },
    en: {
      slug: "early-orthodontics",
      title: "Early Orthodontic Treatment",
      subtitle: "Pediatric Dentistry Service",
      description: [
        "Early orthodontic treatment enables the detection and intervention of jaw and dental development issues during the growth period in children. This approach allows potentially serious orthodontic problems to be resolved with less invasive interventions before they fully develop.",
        "The American Association of Orthodontists recommends that every child undergo an orthodontic evaluation by age 7. At this age, the mixed dentition period has begun, and potential issues can be identified at an early stage.",
        "Crowded teeth, crossbite, narrow upper jaw, and lower jaw protrusion or retrusion can be treated much more easily and effectively during the early period. Interventions performed during the growth phase allow for proper guidance of bone development.",
        "Harmful habits such as thumb sucking, lip sucking, and mouth breathing can also negatively affect the dental and jaw structure. Controlling these habits early is critically important for preventing permanent deformities.",
      ],
      benefits: [
        "Prevention of serious orthodontic problems",
        "Shorter and easier treatment process",
        "Leveraging the growth potential",
        "Reduced need for surgical intervention",
        "Improved self-confidence for the child",
        "Correction of harmful habits",
      ],
      faq: [
        {
          question:
            "At what age should I take my child for an orthodontic examination?",
          answer:
            "Age 7 is the ideal time for a first orthodontic evaluation. At this stage, the mixed dentition has begun, and potential issues can be detected early.",
        },
        {
          question: "How long does early orthodontic treatment take?",
          answer:
            "The treatment duration varies depending on the type and severity of the issue, but it generally lasts between 6 and 18 months.",
        },
        {
          question:
            "What happens if early orthodontic treatment is not performed?",
          answer:
            "Untreated orthodontic problems can worsen over time and may require more comprehensive, long-term treatments or even surgical intervention in the future.",
        },
      ],
      canonicalSlug: "early-orthodontics",
      shortDescription:
        "A treatment approach that detects and addresses jaw and dental development issues in children during their growth period.",
    },
    es: {
      slug: "ortodoncia-temprana",
      title: "Tratamiento de Ortodoncia Temprana",
      subtitle: "Servicio de Odontopediatría",
      description: [
        "El tratamiento de ortodoncia temprana permite la detección e intervención de problemas en el desarrollo maxilar y dental durante el período de crecimiento infantil. Este enfoque permite resolver problemas ortodóncicos potencialmente graves con intervenciones menos invasivas antes de que se desarrollen por completo.",
        "La Asociación Americana de Ortodoncistas recomienda que todos los niños se sometan a una evaluación ortodóncica antes de los 7 años. A esta edad, el período de dentición mixta ya ha comenzado y los problemas potenciales pueden identificarse en una etapa temprana.",
        "Los dientes apiñados, la mordida cruzada, el maxilar superior estrecho y la protrusión o retrusión mandibular pueden tratarse de manera mucho más fácil y eficaz durante el período temprano. Las intervenciones realizadas durante la fase de crecimiento permiten guiar adecuadamente el desarrollo óseo.",
        "Los hábitos nocivos como la succión del pulgar, la succión labial y la respiración bucal también pueden afectar negativamente la estructura dental y maxilar. Controlar estos hábitos de forma temprana es de vital importancia para prevenir deformidades permanentes.",
      ],
      benefits: [
        "Prevención de problemas ortodóncicos graves",
        "Proceso de tratamiento más corto y sencillo",
        "Aprovechamiento del potencial de crecimiento",
        "Reducción de la necesidad de intervención quirúrgica",
        "Mejora de la autoestima del niño",
        "Corrección de hábitos nocivos",
      ],
      faq: [
        {
          question:
            "¿A qué edad debo llevar a mi hijo a una revisión ortodóncica?",
          answer:
            "Los 7 años es la edad ideal para una primera evaluación ortodóncica. En esta etapa, la dentición mixta ya ha comenzado y los problemas potenciales pueden detectarse de forma temprana.",
        },
        {
          question: "¿Cuánto dura el tratamiento de ortodoncia temprana?",
          answer:
            "La duración del tratamiento varía según el tipo y la gravedad del problema, pero generalmente dura entre 6 y 18 meses.",
        },
        {
          question:
            "¿Qué sucede si no se realiza el tratamiento de ortodoncia temprana?",
          answer:
            "Los problemas ortodóncicos no tratados pueden empeorar con el tiempo y requerir tratamientos más extensos y prolongados, o incluso intervención quirúrgica en el futuro.",
        },
      ],
      canonicalSlug: "ortodoncia-temprana",
      shortDescription:
        "Un enfoque terapéutico que detecta y aborda los problemas de desarrollo maxilar y dental en los niños durante su período de crecimiento.",
    },
  },

  "general-anesthesia": {
    tr: {
      slug: "genel-anestezi-altinda-tedavi",
      title: "Genel Anestezi Altında Diş Tedavileri",
      subtitle: "Özel Uzmanlık Alanı",
      description: [
        "Genel anestezi altında diş tedavisi, kapsamlı tedavi gerektiren, çok küçük yaşta olan veya kooperasyon güçlüğü yaşayan çocuklar için hastane ortamında güvenle gerçekleştirilen bir uygulamadır. Bu alanda doktora tez çalışmam devam etmektedir.",
        "Bazı çocuklar yaşları, korku düzeyleri veya özel sağlık durumları nedeniyle klinik ortamında tedavi olmakta zorlanabilirler. Bu durumda, anestezi uzmanı eşliğinde hastane şartlarında tüm tedaviler tek seansta tamamlanır.",
        "Genel anestezi uygulaması, deneyimli bir anesteziyoloji uzmanı tarafından yönetilir. Tedavi öncesi detaylı bir değerlendirme yapılır ve çocuğun genel sağlık durumu kontrol edilir. İşlem sırasında tüm yaşamsal fonksiyonlar sürekli olarak izlenir.",
        "Bu yöntem sayesinde çocuk, tedavi sürecinde hiçbir ağrı veya rahatsızlık hissetmez. Tüm diş tedavileri (dolgu, çekim, kanal tedavisi, kron uygulaması) tek seansta tamamlanarak, çocuğun tekrar tekrar tedavi koltuğuna oturma stresinden kurtulması sağlanır.",
      ],
      benefits: [
        "Hastane ortamında tam güvenlik",
        "Anestezi uzmanı eşliğinde uygulama",
        "Tek seansta tüm tedavilerin tamamlanması",
        "Ağrısız ve stressiz deneyim",
        "Kooperasyon güçlüğüne çözüm",
        "Kapsamlı tedavi imkanı",
        "Sürekli yaşamsal fonksiyon izlemi",
      ],
      faq: [
        {
          question: "Genel anestezi çocuklar için güvenli midir?",
          answer:
            "Evet, modern anestezi teknikleri ve deneyimli anestezi uzmanları eşliğinde yapılan uygulamalar oldukça güvenlidir. Tedavi öncesi detaylı sağlık değerlendirmesi yapılır.",
        },
        {
          question: "Hangi durumlarda genel anestezi tercih edilir?",
          answer:
            "Çok küçük yaştaki çocuklarda, kapsamlı tedavi gerektiğinde, kooperasyon güçlüğü yaşayan çocuklarda ve özel sağlık durumu olan hastalarda genel anestezi tercih edilebilir.",
        },
        {
          question:
            "Tedavi sonrası çocuğum ne zaman normal yaşamına dönebilir?",
          answer:
            "Çoğu çocuk aynı gün taburcu edilir ve genellikle ertesi gün normal aktivitelerine dönebilir. Anestezi sonrası kısa süreli uyuşukluk ve hafif bulantı normal kabul edilir.",
        },
        {
          question: "Tedavi öncesi ne gibi hazırlıklar gerekir?",
          answer:
            "İşlem öncesi belirli bir süre aç kalınması gerekir. Ayrıca kan testleri ve genel sağlık değerlendirmesi yapılır. Detaylı bilgi muayene sırasında verilecektir.",
        },
      ],
      canonicalSlug: "genel-anestezi-altinda-tedavi",
      shortDescription:
        "Kapsamlı tedavi gerektiren veya kooperasyon güçlüğü yaşayan çocuklar için hastane ortamında güvenli diş tedavisi.",
    },
    en: {
      slug: "general-anesthesia-treatment",
      title: "Dental Treatment Under General Anesthesia",
      subtitle: "Specialized Expertise",
      description: [
        "Dental treatment under general anesthesia is a procedure safely performed in a hospital setting for children who require extensive treatment, are very young, or have difficulty cooperating. My doctoral thesis research is ongoing in this field.",
        "Some children may have difficulty receiving treatment in a clinical setting due to their age, level of fear, or special health conditions. In such cases, all treatments are completed in a single session under hospital conditions with the supervision of an anesthesiologist.",
        "The general anesthesia procedure is managed by an experienced anesthesiologist. A detailed evaluation is performed before the treatment, and the child's overall health is assessed. All vital functions are continuously monitored throughout the procedure.",
        "With this method, the child does not experience any pain or discomfort during the treatment process. All dental treatments (fillings, extractions, root canal therapy, crown placement) are completed in a single session, relieving the child from the stress of sitting in the treatment chair repeatedly.",
      ],
      benefits: [
        "Full safety in a hospital environment",
        "Procedure supervised by an anesthesiologist",
        "All treatments completed in a single session",
        "Pain-free and stress-free experience",
        "Solution for cooperation difficulties",
        "Comprehensive treatment opportunity",
        "Continuous vital signs monitoring",
      ],
      faq: [
        {
          question: "Is general anesthesia safe for children?",
          answer:
            "Yes, procedures performed with modern anesthesia techniques and supervised by experienced anesthesiologists are very safe. A detailed health evaluation is performed before the treatment.",
        },
        {
          question:
            "In which situations is general anesthesia preferred?",
          answer:
            "General anesthesia may be preferred for very young children, when extensive treatment is needed, for children with cooperation difficulties, and for patients with special health conditions.",
        },
        {
          question:
            "When can my child return to normal life after the treatment?",
          answer:
            "Most children are discharged the same day and can usually return to their normal activities the following day. Short-term drowsiness and mild nausea after anesthesia are considered normal.",
        },
        {
          question:
            "What preparations are needed before the treatment?",
          answer:
            "Fasting for a certain period before the procedure is required. Blood tests and a general health assessment are also performed. Detailed information will be provided during the examination.",
        },
      ],
      canonicalSlug: "general-anesthesia-treatment",
      shortDescription:
        "Safe dental treatment in a hospital setting for children who require extensive procedures or have difficulty cooperating.",
    },
    es: {
      slug: "tratamiento-anestesia-general",
      title: "Tratamiento Dental Bajo Anestesia General",
      subtitle: "Servicio de Odontopediatría",
      description: [
        "El tratamiento dental bajo anestesia general es un procedimiento que se realiza de forma segura en un entorno hospitalario para niños que requieren tratamientos extensos, son muy pequeños o tienen dificultades para cooperar. Mi investigación de tesis doctoral continúa en este campo.",
        "Algunos niños pueden tener dificultades para recibir tratamiento en un entorno clínico debido a su edad, nivel de miedo o condiciones de salud especiales. En estos casos, todos los tratamientos se completan en una sola sesión bajo condiciones hospitalarias con la supervisión de un anestesiólogo.",
        "El procedimiento de anestesia general es dirigido por un anestesiólogo experimentado. Se realiza una evaluación detallada antes del tratamiento y se valora el estado general de salud del niño. Todas las funciones vitales se monitorizan de forma continua durante todo el procedimiento.",
        "Con este método, el niño no experimenta ningún dolor ni molestia durante el proceso de tratamiento. Todos los tratamientos dentales (obturaciones, extracciones, endodoncias, colocación de coronas) se completan en una sola sesión, liberando al niño del estrés de sentarse repetidamente en el sillón dental.",
      ],
      benefits: [
        "Seguridad total en entorno hospitalario",
        "Procedimiento supervisado por un anestesiólogo",
        "Todos los tratamientos completados en una sola sesión",
        "Experiencia sin dolor y sin estrés",
        "Solución para dificultades de cooperación",
        "Posibilidad de tratamiento integral",
        "Monitorización continua de signos vitales",
      ],
      faq: [
        {
          question: "¿Es segura la anestesia general para los niños?",
          answer:
            "Sí, los procedimientos realizados con técnicas modernas de anestesia y supervisados por anestesiólogos experimentados son muy seguros. Se realiza una evaluación de salud detallada antes del tratamiento.",
        },
        {
          question:
            "¿En qué situaciones se prefiere la anestesia general?",
          answer:
            "La anestesia general puede preferirse para niños muy pequeños, cuando se necesita un tratamiento extenso, para niños con dificultades de cooperación y para pacientes con condiciones de salud especiales.",
        },
        {
          question:
            "¿Cuándo puede mi hijo volver a su vida normal después del tratamiento?",
          answer:
            "La mayoría de los niños reciben el alta el mismo día y generalmente pueden volver a sus actividades normales al día siguiente. La somnolencia breve y las náuseas leves después de la anestesia se consideran normales.",
        },
      ],
      canonicalSlug: "tratamiento-anestesia-general",
      shortDescription:
        "Tratamiento dental seguro en entorno hospitalario para niños que requieren procedimientos extensos o tienen dificultades para cooperar.",
    },
  },

  "rubber-dam": {
    tr: {
      slug: "rubber-dam-izolasyonu",
      title: "Rubber Dam İzolasyonu",
      subtitle: "Güvenli Tedavi Yöntemi",
      description: [
        "Rubber dam (kofferdam), tedavi edilecek dişin özel bir lastik örtü ile ağız boşluğundan izole edilmesi yöntemidir. Bu sayede tedavi bölgesi kuru ve temiz kalır, tükürük ve bakterilerin tedavi alanına ulaşması engellenir.",
        "Çocuk diş hekimliğinde rubber dam kullanımı büyük önem taşır. Özellikle dolgu ve kanal tedavisi gibi işlemlerde, tedavi edilen dişin tükürükten izole edilmesi, tedavinin kalitesini ve ömrünü doğrudan etkiler.",
        "Rubber dam aynı zamanda güvenlik açısından da kritik bir uygulamadır. Tedavi sırasında kullanılan küçük aletlerin, kimyasal maddelerin veya tedavi materyallerinin çocuğun ağzına kaçması, yutulması veya solunması riski ortadan kalkar.",
        "Çocuklar genellikle rubber dam uygulamasına çok kolay adapte olurlar. Ağızlarında sadece tedavi edilen dişin görünür olması, hem çocuğun dikkatini dağıtır hem de tedavi sürecini daha rahat hale getirir.",
      ],
      benefits: [
        "Tedavi bölgesinin tamamen izole edilmesi",
        "Yutma ve solunma riskinin önlenmesi",
        "Daha kaliteli ve uzun ömürlü dolgular",
        "Hijyenik tedavi ortamı",
        "Çocuğun güvenliğinin artması",
        "Tedavi süresinin kısalması",
      ],
      faq: [
        {
          question: "Rubber dam çocuklar için rahatsız edici midir?",
          answer:
            "Hayır, çoğu çocuk rubber dam uygulamasına kolayca adapte olur. Başlangıçta hafif bir rahatsızlık hissedilse de, tedavi boyunca ağzın açık tutulma zorunluluğunu azalttığı için aslında daha konforlu bir deneyim sunar.",
        },
        {
          question: "Her tedavide rubber dam kullanılır mı?",
          answer:
            "Dolgu, kanal tedavisi ve fissür örtücü uygulamaları gibi tedavilerde rubber dam kullanımı altın standarttır. Ancak her durumda kullanılması gerekmeyebilir; doktorunuz uygun tedavi yöntemini belirleyecektir.",
        },
        {
          question: "Rubber dam alerjisi olabilir mi?",
          answer:
            "Nadir durumlarda lateks alerjisi olan hastalarda reaksiyon görülebilir. Bu durumda lateks içermeyen alternatif rubber dam materyalleri kullanılmaktadır.",
        },
      ],
      canonicalSlug: "rubber-dam-izolasyonu",
      shortDescription:
        "Tedavi edilecek dişin özel bir lastik örtü ile izole edilerek güvenli ve hijyenik tedavi ortamı sağlayan yöntem.",
    },
    en: {
      slug: "rubber-dam-isolation",
      title: "Rubber Dam Isolation",
      subtitle: "Safe Treatment Method",
      description: [
        "Rubber dam (cofferdam) is a method of isolating the tooth to be treated from the oral cavity using a special rubber sheet. This keeps the treatment area dry and clean, preventing saliva and bacteria from reaching the treatment site.",
        "The use of rubber dam in pediatric dentistry is of great importance. Particularly in procedures such as fillings and root canal treatments, isolating the treated tooth from saliva directly affects the quality and longevity of the treatment.",
        "Rubber dam is also a critical application in terms of safety. The risk of small instruments, chemical substances, or treatment materials used during treatment falling into the child's mouth, being swallowed, or inhaled is eliminated.",
        "Children generally adapt to rubber dam application very easily. Having only the treated tooth visible in their mouth both distracts the child and makes the treatment process more comfortable.",
      ],
      benefits: [
        "Complete isolation of the treatment area",
        "Prevention of swallowing and aspiration risks",
        "Higher quality and longer-lasting fillings",
        "Hygienic treatment environment",
        "Enhanced child safety",
        "Reduced treatment time",
      ],
      faq: [
        {
          question: "Is rubber dam uncomfortable for children?",
          answer:
            "No, most children adapt to the rubber dam application easily. Although a slight discomfort may be felt at first, it actually provides a more comfortable experience as it reduces the need to keep the mouth open throughout the treatment.",
        },
        {
          question: "Is rubber dam used in every treatment?",
          answer:
            "Rubber dam use is the gold standard in treatments such as fillings, root canal therapy, and fissure sealant applications. However, it may not be necessary in every situation; your dentist will determine the appropriate treatment method.",
        },
        {
          question: "Can there be a rubber dam allergy?",
          answer:
            "In rare cases, patients with latex allergy may experience a reaction. In such cases, latex-free alternative rubber dam materials are used.",
        },
      ],
      canonicalSlug: "rubber-dam-isolation",
      shortDescription:
        "A method that provides a safe and hygienic treatment environment by isolating the tooth to be treated with a special rubber sheet.",
    },
    es: {
      slug: "aislamiento-dique-goma",
      title: "Aislamiento con Dique de Goma",
      subtitle: "Servicio de Odontopediatría",
      description: [
        "El dique de goma (cofferdam) es un método de aislamiento del diente a tratar de la cavidad oral mediante una lámina especial de goma. Esto mantiene el área de tratamiento seca y limpia, impidiendo que la saliva y las bacterias lleguen a la zona de trabajo.",
        "El uso del dique de goma en odontopediatría es de gran importancia. Especialmente en procedimientos como obturaciones y tratamientos de conducto, el aislamiento del diente tratado de la saliva afecta directamente la calidad y la durabilidad del tratamiento.",
        "El dique de goma también es una aplicación crítica en términos de seguridad. Se elimina el riesgo de que pequeños instrumentos, sustancias químicas o materiales de tratamiento utilizados durante el procedimiento caigan en la boca del niño, sean ingeridos o aspirados.",
        "Los niños generalmente se adaptan al dique de goma con mucha facilidad. El hecho de que solo el diente tratado sea visible en su boca distrae al niño y hace que el proceso de tratamiento sea más cómodo.",
      ],
      benefits: [
        "Aislamiento completo del área de tratamiento",
        "Prevención de riesgos de deglución y aspiración",
        "Obturaciones de mayor calidad y durabilidad",
        "Entorno de tratamiento higiénico",
        "Mayor seguridad para el niño",
        "Reducción del tiempo de tratamiento",
      ],
      faq: [
        {
          question: "¿Es incómodo el dique de goma para los niños?",
          answer:
            "No, la mayoría de los niños se adaptan fácilmente al dique de goma. Aunque al principio puede sentirse una ligera molestia, en realidad ofrece una experiencia más cómoda al reducir la necesidad de mantener la boca abierta durante todo el tratamiento.",
        },
        {
          question: "¿Se utiliza el dique de goma en todos los tratamientos?",
          answer:
            "El uso del dique de goma es el estándar de oro en tratamientos como obturaciones, endodoncias y aplicaciones de selladores de fisuras. Sin embargo, puede no ser necesario en todas las situaciones; su odontólogo determinará el método de tratamiento adecuado.",
        },
        {
          question: "¿Puede haber alergia al dique de goma?",
          answer:
            "En casos raros, los pacientes con alergia al látex pueden experimentar una reacción. En tales casos, se utilizan materiales alternativos de dique de goma libres de látex.",
        },
      ],
      canonicalSlug: "aislamiento-dique-goma",
      shortDescription:
        "Un método que proporciona un entorno de tratamiento seguro e higiénico al aislar el diente a tratar con una lámina especial de goma.",
    },
  },

  "steel-crowns": {
    tr: {
      slug: "paslanmaz-celik-kronlar",
      title: "Paslanmaz Çelik Kronlar",
      subtitle: "Süt Dişi Restorasyonu",
      description: [
        "Paslanmaz çelik kronlar, süt dişlerinde ileri düzey çürük nedeniyle dolgu ile yeterli restorasyon sağlanamayan dişlerin korunması için kullanılan prefabrik kron uygulamalarıdır.",
        "Süt dişleri, çocuğun çiğneme fonksiyonu, konuşma gelişimi ve kalıcı dişlerin doğru konumda sürmesi için büyük önem taşır. İleri düzey çürüğe sahip süt dişlerinin erken kaybedilmesi yerine, paslanmaz çelik kronlar ile korunması tercih edilir.",
        "Uygulama genellikle tek seansta tamamlanır. Diş uygun şekilde hazırlandıktan sonra, doğru boyuttaki kron seçilerek dişe uyumlanır ve özel siman ile yapıştırılır. Kron, süt dişinin doğal düşme zamanına kadar yerinde kalır.",
        "Paslanmaz çelik kronlar son derece dayanıklıdır ve günlük çiğneme kuvvetlerine rahatlıkla dayanır. Dolguya kıyasla daha uzun ömürlü olmaları ve tekrarlayan tedavi ihtiyacını azaltmaları en önemli avantajlarıdır.",
      ],
      benefits: [
        "Yüksek dayanıklılık ve uzun ömür",
        "Tek seansta uygulama",
        "Süt dişinin fonksiyonunun korunması",
        "Tekrarlayan tedavi ihtiyacının azalması",
        "Kalıcı diş sürme yolunun korunması",
        "Çiğneme fonksiyonunun sürdürülmesi",
      ],
      faq: [
        {
          question: "Paslanmaz çelik kron ne kadar kalır?",
          answer:
            "Paslanmaz çelik kron, süt dişinin doğal düşme zamanına kadar yerinde kalır. Bu süre, dişin konumuna göre birkaç yıldan 5-6 yıla kadar değişebilir.",
        },
        {
          question: "Kron uygulaması ağrılı mıdır?",
          answer:
            "Uygulama lokal anestezi altında yapılır ve çocuk işlem sırasında ağrı hissetmez. İşlem sonrası hafif hassasiyet olabilir ancak kısa sürede geçer.",
        },
        {
          question: "Neden dolgu yerine kron tercih edilir?",
          answer:
            "İleri düzey çürüklerde dolgu yeterli dayanıklılığı sağlayamayabilir ve tekrar düşme riski yüksektir. Kron, dişi tamamen sarar ve çok daha uzun ömürlü bir restorasyon sağlar.",
        },
      ],
      canonicalSlug: "paslanmaz-celik-kronlar",
      shortDescription:
        "Süt dişlerinde ileri düzey çürük durumlarında dolgu yerine tercih edilen dayanıklı ve uzun ömürlü prefabrik kron uygulaması.",
    },
    en: {
      slug: "stainless-steel-crowns",
      title: "Stainless Steel Crowns",
      subtitle: "Primary Tooth Restoration",
      description: [
        "Stainless steel crowns are prefabricated crown applications used to protect primary teeth that cannot be adequately restored with fillings due to advanced decay.",
        "Primary teeth are of great importance for the child's chewing function, speech development, and the proper eruption of permanent teeth. Rather than early loss of primary teeth with advanced decay, preservation with stainless steel crowns is preferred.",
        "The procedure is usually completed in a single session. After the tooth is properly prepared, the correct-sized crown is selected, adapted to the tooth, and cemented with special dental cement. The crown remains in place until the primary tooth naturally exfoliates.",
        "Stainless steel crowns are extremely durable and can easily withstand daily chewing forces. Their longer lifespan compared to fillings and their ability to reduce the need for repeated treatment are their most significant advantages.",
      ],
      benefits: [
        "High durability and long lifespan",
        "Single-session application",
        "Preservation of primary tooth function",
        "Reduced need for repeat treatment",
        "Preservation of the permanent tooth eruption path",
        "Maintenance of chewing function",
      ],
      faq: [
        {
          question: "How long does a stainless steel crown last?",
          answer:
            "A stainless steel crown remains in place until the primary tooth naturally falls out. This period can range from a few years to 5-6 years depending on the position of the tooth.",
        },
        {
          question: "Is the crown placement procedure painful?",
          answer:
            "The procedure is performed under local anesthesia and the child does not feel pain during the process. There may be slight sensitivity after the procedure, but it passes quickly.",
        },
        {
          question: "Why is a crown preferred over a filling?",
          answer:
            "In cases of advanced decay, fillings may not provide adequate durability and the risk of falling out again is high. A crown completely encases the tooth and provides a much longer-lasting restoration.",
        },
      ],
      canonicalSlug: "stainless-steel-crowns",
      shortDescription:
        "A durable, long-lasting prefabricated crown application preferred over fillings for advanced decay in primary teeth.",
    },
    es: {
      slug: "coronas-acero-inoxidable",
      title: "Coronas de Acero Inoxidable",
      subtitle: "Servicio de Odontopediatría",
      description: [
        "Las coronas de acero inoxidable son aplicaciones de coronas prefabricadas utilizadas para proteger los dientes temporales que no pueden restaurarse adecuadamente con obturaciones debido a caries avanzadas.",
        "Los dientes temporales son de gran importancia para la función masticatoria del niño, el desarrollo del habla y la erupción correcta de los dientes permanentes. En lugar de la pérdida prematura de los dientes temporales con caries avanzada, se prefiere su conservación mediante coronas de acero inoxidable.",
        "El procedimiento generalmente se completa en una sola sesión. Después de preparar el diente adecuadamente, se selecciona la corona del tamaño correcto, se adapta al diente y se cementa con un cemento dental especial. La corona permanece en su lugar hasta que el diente temporal se exfolia de forma natural.",
        "Las coronas de acero inoxidable son extremadamente duraderas y pueden resistir fácilmente las fuerzas masticatorias diarias. Su mayor durabilidad en comparación con las obturaciones y su capacidad para reducir la necesidad de tratamientos repetidos son sus ventajas más significativas.",
      ],
      benefits: [
        "Alta durabilidad y larga vida útil",
        "Aplicación en una sola sesión",
        "Preservación de la función del diente temporal",
        "Reducción de la necesidad de retratamiento",
        "Conservación de la vía de erupción del diente permanente",
        "Mantenimiento de la función masticatoria",
      ],
      faq: [
        {
          question: "¿Cuánto dura una corona de acero inoxidable?",
          answer:
            "La corona de acero inoxidable permanece en su lugar hasta que el diente temporal se cae de forma natural. Este período puede variar desde unos pocos años hasta 5-6 años, dependiendo de la posición del diente.",
        },
        {
          question: "¿Es doloroso el procedimiento de colocación de la corona?",
          answer:
            "El procedimiento se realiza bajo anestesia local y el niño no siente dolor durante el proceso. Puede haber una ligera sensibilidad después del procedimiento, pero desaparece rápidamente.",
        },
        {
          question: "¿Por qué se prefiere una corona en lugar de una obturación?",
          answer:
            "En casos de caries avanzada, las obturaciones pueden no proporcionar la durabilidad adecuada y el riesgo de desprendimiento es alto. La corona envuelve completamente el diente y proporciona una restauración mucho más duradera.",
        },
      ],
      canonicalSlug: "coronas-acero-inoxidable",
      shortDescription:
        "Aplicación de coronas prefabricadas duraderas y de larga vida útil, preferidas sobre las obturaciones para caries avanzadas en dientes temporales.",
    },
  },

  "clear-aligners": {
    tr: {
      slug: "seffaf-plaklar-ortodonti",
      title: "Şeffaf Plaklarla Ortodonti",
      subtitle: "Invisalign Tedavisi",
      description: [
        "Şeffaf plak tedavisi (Invisalign), geleneksel metal tel tedavisine modern ve estetik bir alternatif sunar. Özel olarak üretilen şeffaf ve çıkarılabilir plaklar sayesinde, dişler kademeli olarak istenen konuma getirilir.",
        "Çocuklar ve gençler için tasarlanan Invisalign First ve Invisalign Teen sistemleri, büyüme dönemindeki hastalara özel çözümler sunar. Plaklar neredeyse görünmez olduğu için sosyal ortamlarda ve okul hayatında rahatlıkla kullanılabilir.",
        "Tedavi sürecinde belirli aralıklarla yeni plak setleri kullanılır ve her plak, dişleri bir sonraki konuma doğru nazikçe hareket ettirir. Dijital planlama sayesinde tedavinin başlangıcından sonuçlarına kadar tüm süreç önceden görülebilir.",
        "Plaklar çıkarılabilir olduğu için diş fırçalama ve beslenme alışkanlıkları olumsuz etkilenmez. Bu durum, özellikle ağız hijyeni açısından geleneksel tel tedavisine göre büyük avantaj sağlar.",
      ],
      benefits: [
        "Estetik ve neredeyse görünmez",
        "Çıkarılabilir plaklar",
        "Kolay ağız hijyeni",
        "Konforlu kullanım",
        "Dijital tedavi planlaması",
        "Daha az klinik ziyareti",
      ],
      faq: [
        {
          question: "Çocuğum için şeffaf plak tedavisi uygun mu?",
          answer:
            "Şeffaf plak tedavisi, belirli yaş ve diş gelişim kriterlerini karşılayan çocuklar için uygun olabilir. Muayene sonrası çocuğunuz için en uygun tedavi yöntemi belirlenecektir.",
        },
        {
          question: "Plaklar günde kaç saat takılmalıdır?",
          answer:
            "En iyi sonuçlar için plakların günde 20-22 saat takılması önerilir. Sadece yemek yerken ve diş fırçalarken çıkarılmalıdır.",
        },
        {
          question: "Tedavi süresi ne kadardır?",
          answer:
            "Tedavi süresi vakaya göre değişmekle birlikte, genellikle 6 ay ile 24 ay arasındadır. Tedavi planlaması sırasında tahmini süre hakkında bilgi verilecektir.",
        },
      ],
      canonicalSlug: "seffaf-plaklar-ortodonti",
      shortDescription:
        "Geleneksel metal tel tedavisine modern ve estetik bir alternatif sunan şeffaf ve çıkarılabilir plak sistemi.",
    },
    en: {
      slug: "clear-aligners",
      title: "Clear Aligner Orthodontics",
      subtitle: "Invisalign Treatment",
      description: [
        "Clear aligner therapy (Invisalign) offers a modern and aesthetic alternative to traditional metal braces. With custom-made, clear, and removable aligners, teeth are gradually moved into the desired position.",
        "Invisalign First and Invisalign Teen systems, designed for children and adolescents, offer specialized solutions for patients in their growth period. Since the aligners are nearly invisible, they can be comfortably used in social settings and school life.",
        "During the treatment process, new sets of aligners are used at regular intervals, with each aligner gently moving the teeth toward the next position. Thanks to digital planning, the entire process from the beginning to the outcome of the treatment can be previewed in advance.",
        "Since the aligners are removable, brushing and eating habits are not negatively affected. This provides a significant advantage over traditional braces, especially in terms of oral hygiene.",
      ],
      benefits: [
        "Aesthetic and nearly invisible",
        "Removable aligners",
        "Easy oral hygiene maintenance",
        "Comfortable wear",
        "Digital treatment planning",
        "Fewer clinical visits",
      ],
      faq: [
        {
          question:
            "Is clear aligner treatment suitable for my child?",
          answer:
            "Clear aligner treatment may be suitable for children who meet certain age and dental development criteria. The most appropriate treatment method for your child will be determined after an examination.",
        },
        {
          question:
            "How many hours a day should the aligners be worn?",
          answer:
            "For the best results, wearing the aligners for 20-22 hours a day is recommended. They should only be removed when eating and brushing teeth.",
        },
        {
          question: "How long is the treatment duration?",
          answer:
            "The treatment duration varies depending on the case, but it generally ranges from 6 to 24 months. Estimated duration will be provided during the treatment planning phase.",
        },
      ],
      canonicalSlug: "clear-aligners",
      shortDescription:
        "A clear, removable aligner system offering a modern and aesthetic alternative to traditional metal braces.",
    },
    es: {
      slug: "alineadores-transparentes",
      title: "Ortodoncia con Alineadores Transparentes",
      subtitle: "Servicio de Odontopediatría",
      description: [
        "La terapia con alineadores transparentes (Invisalign) ofrece una alternativa moderna y estética a los brackets metálicos tradicionales. Con alineadores transparentes y removibles fabricados a medida, los dientes se mueven gradualmente hacia la posición deseada.",
        "Los sistemas Invisalign First e Invisalign Teen, diseñados para niños y adolescentes, ofrecen soluciones especializadas para pacientes en su período de crecimiento. Dado que los alineadores son prácticamente invisibles, pueden utilizarse cómodamente en entornos sociales y en la vida escolar.",
        "Durante el proceso de tratamiento, se utilizan nuevos juegos de alineadores a intervalos regulares, y cada alineador mueve suavemente los dientes hacia la siguiente posición. Gracias a la planificación digital, todo el proceso desde el inicio hasta el resultado del tratamiento puede visualizarse previamente.",
        "Como los alineadores son removibles, los hábitos de cepillado y alimentación no se ven afectados negativamente. Esto proporciona una ventaja significativa sobre los brackets tradicionales, especialmente en términos de higiene oral.",
      ],
      benefits: [
        "Estéticos y prácticamente invisibles",
        "Alineadores removibles",
        "Fácil mantenimiento de la higiene oral",
        "Uso cómodo y confortable",
        "Planificación digital del tratamiento",
        "Menos visitas clínicas",
      ],
      faq: [
        {
          question:
            "¿Es adecuado el tratamiento con alineadores transparentes para mi hijo?",
          answer:
            "El tratamiento con alineadores transparentes puede ser adecuado para niños que cumplan ciertos criterios de edad y desarrollo dental. El método de tratamiento más apropiado para su hijo se determinará después de un examen.",
        },
        {
          question:
            "¿Cuántas horas al día deben usarse los alineadores?",
          answer:
            "Para obtener los mejores resultados, se recomienda usar los alineadores de 20 a 22 horas al día. Solo deben retirarse al comer y al cepillarse los dientes.",
        },
        {
          question: "¿Cuánto dura el tratamiento?",
          answer:
            "La duración del tratamiento varía según el caso, pero generalmente oscila entre 6 y 24 meses. La duración estimada se proporcionará durante la fase de planificación del tratamiento.",
        },
      ],
      canonicalSlug: "alineadores-transparentes",
      shortDescription:
        "Un sistema de alineadores transparentes y removibles que ofrece una alternativa moderna y estética a los brackets metálicos tradicionales.",
    },
  },

  "digital-anesthesia": {
    tr: {
      slug: "dijital-anestezi",
      title: "Dijital Anestezi",
      subtitle: "Ağrısız Tedavi Teknolojisi",
      description: [
        "Dijital anestezi (WAND/STA sistemi), bilgisayar kontrollü lokal anestezi uygulamasıdır. Geleneksel enjektöre kıyasla çok daha hassas, kontrollü ve ağrısız bir anestezi deneyimi sunar.",
        "Sistem, anestezik maddenin verilme hızını ve basıncını bilgisayar aracılığıyla kontrol eder. Bu sayede doku hasarı minimuma indirilir ve anestezi uygulaması neredeyse hissedilmez hale gelir. İğne korkusu olan çocuklar için ideal bir çözümdür.",
        "Geleneksel enjeksiyonlarda ağrının en büyük nedeni, anestezik maddenin kontrolsüz hız ve basınçla dokuya verilmesidir. Dijital anestezi sisteminde bu sorun tamamen ortadan kalkar; madde çok yavaş ve sabit bir basınçla uygulanır.",
        "Dijital anestezi cihazı, görünüm olarak da geleneksel enjektörden farklıdır. Kalem şeklindeki tasarımı çocukları daha az korkutur ve tedaviye olan uyumu artırır. Bu sayede çocuğunuzun diş hekimi deneyimi çok daha olumlu hale gelir.",
      ],
      benefits: [
        "Neredeyse ağrısız uygulama",
        "Bilgisayar kontrollü hassas dozaj",
        "İğne korkusuna etkili çözüm",
        "Minimal doku hasarı",
        "Çocuk dostu cihaz tasarımı",
        "Daha hızlı etki başlangıcı",
      ],
      faq: [
        {
          question: "Dijital anestezi gerçekten ağrısız mıdır?",
          answer:
            "Tamamen ağrısız demek mümkün olmasa da, geleneksel enjeksiyona kıyasla çok daha az ağrılıdır. Çoğu çocuk hasta, anestezi yapıldığını fark etmez bile.",
        },
        {
          question: "Her tedavide dijital anestezi kullanılabilir mi?",
          answer:
            "Evet, lokal anestezi gerektiren hemen her tedavide dijital anestezi sistemi kullanılabilir. Dolgu, kanal tedavisi ve çekim gibi işlemlerde rahatlıkla uygulanır.",
        },
        {
          question: "Dijital anestezinin yan etkileri var mıdır?",
          answer:
            "Dijital anestezi, geleneksel anestezi ile aynı ilaçları kullanır; fark sadece uygulama yöntemindedir. Bu nedenle ek bir yan etkisi bulunmamaktadır.",
        },
      ],
      canonicalSlug: "dijital-anestezi",
      shortDescription:
        "Bilgisayar kontrollü hassas dozajlama ile ağrısız ve konforlu anestezi deneyimi sunan modern teknoloji.",
    },
    en: {
      slug: "digital-anesthesia",
      title: "Digital Anesthesia",
      subtitle: "Painless Treatment Technology",
      description: [
        "Digital anesthesia (WAND/STA system) is a computer-controlled local anesthesia application. It offers a much more precise, controlled, and painless anesthesia experience compared to traditional syringes.",
        "The system controls the delivery rate and pressure of the anesthetic agent via computer. This minimizes tissue damage and makes the anesthesia application virtually imperceptible. It is an ideal solution for children who are afraid of needles.",
        "The primary cause of pain in traditional injections is the uncontrolled speed and pressure at which the anesthetic agent is delivered to the tissue. The digital anesthesia system completely eliminates this problem; the agent is administered at a very slow and constant pressure.",
        "The digital anesthesia device also differs in appearance from a traditional syringe. Its pen-like design is less frightening to children and improves treatment compliance. This makes your child's dental experience much more positive.",
      ],
      benefits: [
        "Virtually painless application",
        "Computer-controlled precise dosing",
        "Effective solution for needle phobia",
        "Minimal tissue damage",
        "Child-friendly device design",
        "Faster onset of action",
      ],
      faq: [
        {
          question: "Is digital anesthesia truly painless?",
          answer:
            "While it may not be completely painless, it is significantly less painful compared to traditional injections. Most pediatric patients do not even notice that anesthesia has been administered.",
        },
        {
          question:
            "Can digital anesthesia be used in every treatment?",
          answer:
            "Yes, the digital anesthesia system can be used in virtually any treatment requiring local anesthesia. It is comfortably applied in procedures such as fillings, root canal therapy, and extractions.",
        },
        {
          question:
            "Does digital anesthesia have any side effects?",
          answer:
            "Digital anesthesia uses the same medications as traditional anesthesia; the only difference is in the delivery method. Therefore, there are no additional side effects.",
        },
      ],
      canonicalSlug: "digital-anesthesia",
      shortDescription:
        "Modern technology offering a painless and comfortable anesthesia experience with computer-controlled precise dosing.",
    },
    es: {
      slug: "anestesia-digital",
      title: "Anestesia Digital",
      subtitle: "Servicio de Odontopediatría",
      description: [
        "La anestesia digital (sistema WAND/STA) es una aplicación de anestesia local controlada por ordenador. Ofrece una experiencia anestésica mucho más precisa, controlada e indolora en comparación con las jeringas tradicionales.",
        "El sistema controla la velocidad de administración y la presión del agente anestésico mediante ordenador. Esto minimiza el daño tisular y hace que la aplicación de la anestesia sea prácticamente imperceptible. Es una solución ideal para los niños que tienen miedo a las agujas.",
        "La causa principal del dolor en las inyecciones tradicionales es la velocidad y presión incontroladas con las que el agente anestésico se administra en el tejido. El sistema de anestesia digital elimina completamente este problema; el agente se administra a una presión muy lenta y constante.",
        "El dispositivo de anestesia digital también difiere en apariencia de una jeringa tradicional. Su diseño en forma de bolígrafo resulta menos intimidante para los niños y mejora la cooperación durante el tratamiento. Esto hace que la experiencia dental de su hijo sea mucho más positiva.",
      ],
      benefits: [
        "Aplicación prácticamente indolora",
        "Dosificación precisa controlada por ordenador",
        "Solución eficaz para la fobia a las agujas",
        "Daño tisular mínimo",
        "Diseño del dispositivo adaptado a los niños",
        "Inicio de acción más rápido",
      ],
      faq: [
        {
          question: "¿Es realmente indolora la anestesia digital?",
          answer:
            "Aunque no puede decirse que sea completamente indolora, es significativamente menos dolorosa en comparación con las inyecciones tradicionales. La mayoría de los pacientes pediátricos ni siquiera notan que se les ha administrado la anestesia.",
        },
        {
          question:
            "¿Se puede utilizar la anestesia digital en todos los tratamientos?",
          answer:
            "Sí, el sistema de anestesia digital puede utilizarse en prácticamente cualquier tratamiento que requiera anestesia local. Se aplica cómodamente en procedimientos como obturaciones, endodoncias y extracciones.",
        },
        {
          question:
            "¿Tiene la anestesia digital algún efecto secundario?",
          answer:
            "La anestesia digital utiliza los mismos medicamentos que la anestesia tradicional; la única diferencia está en el método de administración. Por lo tanto, no existen efectos secundarios adicionales.",
        },
      ],
      canonicalSlug: "anestesia-digital",
      shortDescription:
        "Tecnología moderna que ofrece una experiencia anestésica indolora y confortable con dosificación precisa controlada por ordenador.",
    },
  },
};

export const serviceIds = Object.keys(services);

export function getService(
  id: string,
  locale: Locale,
): ServiceData | undefined {
  return services[id]?.[locale];
}

export function getAllServices(locale: Locale): ServiceData[] {
  return serviceIds.map((id) => services[id][locale]);
}

export function getServiceBySlug(
  slug: string,
  locale: Locale,
): ServiceData | undefined {
  for (const id of serviceIds) {
    const data = services[id][locale];
    if (data.slug === slug) {
      return data;
    }
  }
  return undefined;
}
