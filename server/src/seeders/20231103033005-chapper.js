"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("chappers", [
      // truyện 1
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 1,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 1,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 1,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 1,
        number_chapper: 4,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 2
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 2,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 2,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 2,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 2,
        number_chapper: 4,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 2,
        number_chapper: 5,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // truyện 3
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 3,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 3,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // truyện 4
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 4,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 4,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 4,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 5
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 5,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 5,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 5,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vụ án thứ 2: Thằn lằn trong rương 1 : Chó hoang và...",
        id_story: 5,
        number_chapper: 4,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //truyện 6
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 6,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 6,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 6,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vụ án thứ 2: Thằn lằn trong rương 1 : Chó hoang và...",
        id_story: 6,
        number_chapper: 4,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 7
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 7,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 7,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 7,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vụ án thứ 2: Thằn lằn trong rương 1 : Chó hoang và...",
        id_story: 7,
        number_chapper: 4,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyeenj 8
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 8,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 8,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 8,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 9
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 9,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 9,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 9,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 10
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 10,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 10,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 10,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 11
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 11,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 11,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 11,
        number_chapper: 3,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 12
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 12,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 12,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 13
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 13,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 13,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // truyện 14
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 14,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 14,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // truyện 15
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 15,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 15,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CÔ VỢ ĐÁNG GỜM CỦA LĂNG THIẾU",
        id_story: 16,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //truỵen tranh id=45
      {
        title: "Vụ án thứ 2: Thằn lằn trong rương 1 : Chó hoang và...",
        id_story: 16,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vụ án thứ 1: Thằn lằn trong rương 1 : Chó hoang và...",
        id_story: 17,
        number_chapper: 1,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        title: "Vụ án thứ 2: Thằn lằn trong rương 1 : Chó hoang và...",
        id_story: 17,
        number_chapper: 2,
        image: null,
        content: `“Đánh chết nó! Mau đuổi theo!”

        “Chó hoang, đừng chạy!”
        
        Một đám côn đồ đầu tóc quái dị, tên cầm thiết côn, tên cầm xích chạy thật nhanh, còn không ngừng hô to, quơ quơ vũ khí trên tay, giống như muốn phát tiết cái tinh lực dồi dào của tuổi trẻ.
        
        Phía trước có một nam tử ăn mặc nhếch nhác hình như cũng đang chạy trốn, trong tay cầm một thiết côn, xoay người lại đem thiết côn đánh đám người kia đến chảy máu đầu. Hả giận cười lạnh một tiếng, nam tử được gọi là chó hoang chạy vào một con hẻm nhỏ phía trước, động tác của hắn rất kỳ quái, nhưng mà hắn rất rành đường, không bao lâu đã đem đám người kia bỏ lại phía sau. Hắn dựa vào vách tường thở hổn hển, trong chốc lát lấy lại hơi thở, chó hoang giơ cánh tay lên quẹt đi vết máu trên miệng, phun ra một câu, “Mẹ nó, ám toán tao.”
        
        Đưa tay móc móc túi, lấy ra bao thuốc lá còn được một điếu cuối cùng, tiếp tục bới móc, trên người chỉ còn ba mươi mấy đồng, cũng may bụng không có đói. Hai tay đút vào túi bước về phía trước, chỗ làm việc nhất định không thể về, đi đâu bây giờ? Đám nhóc kia không chừng còn đang trong thành đuổi giết hắn, phải tìm một chỗ lánh nạn mới được.
        
        Đi đến giao lộ, liền thấy một chiếc xe buýt đang dừng lại đón khách, là đến thành phố S kế bên, nhìn nhìn đồng hồ, bốn giờ rưỡi… Lên xe ngủ một tiếng, vậy khoảng sáu giờ là tới thành phố S đi, ít nhất ở trên xe cũng không ai có thể đánh lén hắn. Chủ ý đã định, chó hoang đem áo khoác cởi ra che đi cánh tay bị thương của mình, hắn cuối cùng cũng lên được xe trước khi cửa xe đóng lại, lấy ra mấy đồng bỏ vào thùng vé, đi đến hàng cuối cùng, hai tay đút vào túi ngồi xuống, dựa vào kính xe rất nhanh liền thiếp đi.
        
        Xe một đường lúc dừng lúc chạy, có người lên cũng có người xuống, nhưng chó hoang hoàn toàn không thèm để ý, hắn đã tiến vào mộng đẹp rồi, xác thực mà nói, hắn không phải đang nằm mộng, mà là đang nhớ lại.
        
        Tên của chó hoang là Mạc Phi, chó hoang chỉ là một biệt hiệu mà thôi, bởi vì hắn rất giống chó hoang, đều không có nhà để về, đều sẽ cắn người.
        
        Mạc Phi cũng không phải không có nhà để về, hắn có người nhà, ba mẹ đều là người rất tốt, thiện lương nhã nhặn, cả đời cũng không thương tổn bất kì sinh mệnh nào, cho nên bọn họ không thể lý giải tại sao lại sinh ra một đứa con như Mạc Phi. Năm Mạc Phi mười tuổi, có thể đem đàn anh lớp trên đánh đến sứt đầu mẻ trán, nằm trong bệnh viện nửa năm có lúc suýt chết. Thầy cô còn có ba mẹ hỏi hắn tại sao lại đánh người, hắn chỉ nói, “Nhìn không vừa mắt.”
        Từ đó trở đi, mọi người đều xem hắn là quái vật, mà tính tình của hắn cũng càng ngày càng hỏng. Nhưng thành thật mà nói, hắn cũng không phải muốn đi đánh người, lúc người khác trêu chọc hắn, hắn cũng chưa bao giờ nổi giận, tối đa là ngủ một chút sau đó đi làm việc, kiếm tiền mua mấy thứ mình thích, chỉ vậy thôi. Nhưng mà khi biệt hiệu chó hoang của hắn truyền ra, rất nhiều người đếu cố ý tới chọc hắn, hắn dù sao cũng thích đánh người, người vừa tới cửa liền đánh, chính là gần đây có mấy tiểu tử lập thành bang phái cấu kết với nhau, kéo một đám huynh đệ tới phục kích, làm cho hắn ngay cả một bát cơm cũng không có mà ăn.

        Xe phanh lại một cái rồi lúc lắc dừng lại, chợt nghe tài xế dùng thanh âm thô ráp hô to, “Tới rồi!”

        Mạc Phi mở to mắt nhìn ra cửa sổ, lúc này trời đã sắp chuyển tối, hắn vẫn là lần đầu tiên tới thành phố S, chỉ thấy một mảng nhà lầu cao tầng xa xa, đèn đóm rực rỡ, khắp nơi sáng rực làm cho người ta chóng mặt. Hai tay đút vào túi quần, xuống xe, bước đi trên đường cái. Mạc Phi xoay một vòng, nghĩ muốn tìm một chỗ để tối nay ngủ qua đêm, sáng mai tìm một công việc, may mắn là giấy tờ tùy thân đều mang theo bên mình, hắn cũng không có vật gì đáng giá, liền lảo đảo bước về phía trước, vừa đi vừa thưởng thức cảnh đêm ở thành phố S.

        Rõ ràng chỉ tốn một giờ đồng hồ ngồi xe, nhưng sự phồn vinh lại hoàn toàn bất đồng, tại sao thành phố K nơi hắn sinh ra và lớn lên so với thành phố S lại kém xa như vậy? Đang đi bỗng nhiên trời bắt đầu tí tách mưa, Mạc Phi có chút oán niệm ngẩng đầu nhìn lão thiên gia liếc mắt một cái. Ban đầu, cho dù có mưa cũng không tính là gì, nhưng mà hắn bây giờ chỉ có một bộ quần áo, nếu mà ướt thì ngày mai làm sao đi kiếm việc làm a, cũng không thể một thân trần truồng đi xin việc đi? Nhìn trái nhìn phải, Mạc Phi liền nhìn thấy một con hẻm nhỏ phía trước, nghĩ nơi đó sẽ có mấy chỗ để trú mưa, liền chạy thật nhanh tới. Lúc quẹo vào con hẻm không để ý liền bị vách tường quẹt một cái, đụng trúng vết thương lúc nãy.
        “Ai da…” Mạc Phi bóp chặt cánh tay cắn răng hô, ngẩng đầu, quả nhiên ở phía trước cách hai bước có một cái cổng tò vò, dựa theo kinh nghiệm của hắn, chỗ này nhất định có thể trú mưa. Bước tới vài bước, Mạc Phi vòng qua cổng tò vò định bước vào, khóe mắt đột nhiên phiêu tới một chỗ rất sáng ở đằng trước.

        Quay sang, chỉ thấy ở cuối con hẻm, có một góc, nơi đó phát ra ánh sáng. Mạc Phi thấy có chút kỳ quái, tâm nói là cửa hàng sao? Làm sao lại có cửa hàng nào mở ở chỗ này? Lòng hiếu kỳ nổi lên, hắn bước tới, đi được một đoạn đường, hắn xoay người sang nhìn, liền thấy phía trước quả nhiên có một cửa hàng. Mạc Phi đầu tiên bị ngọn đèn ở trước cửa hấp dẫn, chiếc đèn này cảm giác như cái loại được thiết kế theo phong cách thời Trung cổ Châu Âu, trước kia khi làm việc trong một quán cà phê, hắn đã từng thấy qua. Chụp đèn hình lục lăng, tỏa ra ánh sáng ấm áp nhu hòa, xung quanh còn có hình bươm bướm vờn quanh, ánh sáng lúc nãy Mạc Phi thấy chính là ánh sáng phát ra từ ngọn đèn này. Phía sau chiếc đèn là một cửa hàng nhỏ, tủ kính cùng đại môn đều được trang trí, thoạt nhìn thật tinh xảo, bên trong còn phát ra ánh sáng ấm áp, trên cửa còn có một tấm bảng, mặt trên viết “Đang kinh doanh”.

        Mạc Phi nhìn hồi lâu, cũng không hiểu ở đây bán thứ gì, tiến tới vài bước, nhìn vào trong tủ kính, thứ đầu tiên đập vào mắt là một nữ nhân thân thể trần truồng đang cầm một bình nước đứng giữa đồng cỏ lau. Mạc Phi hoảng sợ, tâm nghĩ đừng nói là cái chỗ đó đi, bất quá lại cảm thấy không đúng, tinh tế nhìn xem, nữ nhân kia tuy rằng không mặc quần áo, nhưng một chút cũng không thấy khí tức dâm loạn, thật ra nếu để ý đến cỏ lau bên người nàng cùng bình nước nàng cầm, sẽ thấy nước trong bình đang chậm rãi chảy xuống, làm cho người ta cảm thấy thật đẹp mà nhu hòa… Cỏ lau? Mạc Phi lập tức phản ứng, làm sao có thể có cỏ lau trong tủ kính, còn có người đàn bà kia nhìn rất giống thật, nhưng mà không hề động đậy, tiến đến gần nhìn một chút, Mạc Phi nhụt chí, nguyên lai mà một bức tranh vẽ y như thật.

        Nhìn sang hai bên, hắn thấy có rất nhiều bức tranh được treo khắp mọi nơi, có người có vật có phong cảnh, Mạc Phi hiểu ra, đây là một phòng tranh. Trong lòng hắn lúc hiểu được điều này thì cũng là lúc hắn đẩy cửa vào.

        “Lang lang ~~~” phong linh treo trên cửa kêu lên, Mạc Phi hoàn toàn không để ý, bởi vì tầm mắt của hắn còn có toàn bộ lực chú ý đều bị những bức tranh treo trên tường hấp dẫn.

        Căn phòng này rất lớn, tường rất cao, có một cầu thang thông lên tầng hai, trên tường treo đủ loại tranh với nhiều màu sắc, đều là tranh, khuôn khổ mỗi bức đều giống nhau như đúc, chân thật nói không nên lời. Làm cho Mạc Phi giật mình chính là,  những bức tranh kia đều cho hắn một loại cảm giác kỳ diệu, rất thoải mái, phi thường thoải mái, bất luận trên bức tranh đó có vẽ cái gì, không hiểu sao đều lộ ra một cảm giác rất nhu hòa và tự nhiên. Mạc Phi nhìn nhìn, nhịn không được tiến lên, với tay nhẹ nhàng chạm vào một bức tranh, cảm giác vân da tiếp xúc nói cho hắn biết, đây thật sự là một bức tranh, cũng không phải ảnh chụp mặt trên bóng loáng.

        Đang lúc nhìn chằm chằm bức tranh tới xuất thần, Mạc Phi chợt nghe thấy tiếng bước chân từ trên lầu nhẹ nhàng truyền xuống… Ngẩng đầu, hắn thấy một người đang đi xuống. Mạc Phi có chút xấu hổ lại có chút ngạc nhiên, hắn cảm thấy bản thân tựa hồ nên rời khỏi, nhưng lại muốn hỏi những bức tranh này là do ai vẽ, hắn muốn nhìn một chút người vẽ những bức tranh này đến tột cùng có bộ dáng gì.

        Người nọ đang xuống lầu, xoay mặt lại hơi hơi giật mình nhìn Mạc Phi, lúc đó, Mạc Phi cũng đang nhìn hắn.

        Người đang xuống lầu là một nam tử còn trẻ, mặc một thân áo lông màu đen, quần đen, cùng với giày đen, còn có tóc đen, từ đầu tới chân đều một màu đen, nhưng mặt hắn cùng tay đều rất trắng, người này không cao không thấp, nhưng rất gầy, thuộc loại người có dáng mảnh khảnh, diện mạo thì… Mạc Phi nhấc mi, là một nam nhân phi thường xinh đẹp.

        Người nọ cũng đánh giá Mạc Phi một chút, Mạc Phi rất cao, hơn nữa còn khỏe mạnh, có chút giống chó hoang. Mạc Phi kỳ thật thoạt nhìn chỉ giống một thằng con trai chừng mười bảy mười tám tuổi, cũng không có nhiều khí chất lưu manh, tóc ngắn sạch sẽ gọn gàng, nhưng mà khuôn mặt có chút đáng ghét, có vẻ kiêu ngạo bất tuân, dùng lời nói của người thường đánh nhau với hắn mà nói, hắn vừa lớn lên đã đi đánh người.

        “Có việc gì sao?” Hắc y nam tử thấp giọng hỏi Mạc Phi.

        Mạc Phi do dự một chút, gật gật đầu, nói, “Ách, những bức tranh này là do ai vẽ?”

        Hắc y nam tử hơi hơi nghiêng mặt, quan sát Mạc Phi một chút, trả lời, “Là do tôi vẽ.”

        “Cậu vẽ?!” Mạc Phi giật mình, hắn nguyên bản vốn tưởng rằng người vẽ nhưng bức tranh này, không phải là mấy ông già bảy mươi tám mươi tuổi, thì cũng là mấy ông bác trung niên, chưa từng nghĩ tới lại do một người trẻ tuổi chỉ mới hơn hai mươi vẽ ra.

        Hắc y nhân kia hỏi lại Mạc Phi, “Đúng vậy, muốn mua tranh sao?”

        Mạc Phi sửng sốt một chút, tranh ở đây hắn rất thích, nhưng mà loại tranh đặc biệt vẽ y như thật này rất đắt, điều đó là lẽ thường hắn đã biết nhưng vẫn muốn hỏi, “Những bức tranh này, giá bao nhiêu?”

        Người nọ nhìn chằm chằm Mạc Phi trong giây lát, khẽ cười nói, “Ba mươi đồng khẳng định không đủ.”
         `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 32,
        number_chapper: 5,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh 4
      {
        title: "Chapter 1",
        id_story: 33,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh 5
      {
        title: "Chapter 1",
        id_story: 34,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh 6
      {
        title: "Chapter 1",
        id_story: 35,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 36,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 37,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 38,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 39,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 40,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 41,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 42,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 43,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 45,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    //tranh3
      {
        title: "Chapter 1",
        id_story: 44,
        number_chapper: 1,
        image: null,
        content: null,
        version: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("chappers", null, {});
  },
};
