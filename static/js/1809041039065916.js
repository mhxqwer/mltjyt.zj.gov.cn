document.writeln("<style>");
    document.writeln(".mobile_type .nav ul li {width:auto !important; }");
    document.writeln(".mobile_type .two-columns ul li{height:30px; line-height:30px; }");
    
    document.writeln("    body {");
    document.writeln("		min-width: 1200px;");
    document.writeln("	} .content-right ul li a{    text-overflow: ellipsis; }");
    document.writeln("	");
    document.writeln("	a {");
    document.writeln("		color: #333;");
    document.writeln("	}");
    document.writeln("	");
    document.writeln("	.header {");
    document.writeln("		width: 100%;");
    document.writeln("		height: 610px;");
    document.writeln("		background: url(//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1809041341257329308.png);");
    document.writeln("  }");
    document.writeln(" .top {");
    document.writeln("			width: 100%;");
    document.writeln("			height: 200px;");
    document.writeln("			background-color: white;");
    document.writeln("		}");
    document.writeln("		.head-column {");
    document.writeln("			width: 1200px;");
    document.writeln("			height: 150px;");
    document.writeln("			margin: 0 auto;");
    document.writeln("			position: relative;");
    document.writeln("		}");
    document.writeln("		.head-list {");
    document.writeln("			margin-top: 5px;");
    document.writeln("			float: right;");
    document.writeln("		}");
    document.writeln("		.head-list ul a {");
    document.writeln("			font-size: 13px;");
    document.writeln("			margin: 0 10px;");
    document.writeln("			color: #333333;");
    document.writeln("		}");
    document.writeln("		.head-list ul li {");
    document.writeln("			float: left;");
    document.writeln("position: relative;background: url(//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1809041341258229353.png) no-repeat right ;");
    document.writeln("		}");
    document.writeln("		.head-list ul li:last-child {");
    document.writeln("			background: none;");
    document.writeln("		}");
    document.writeln("		.cearch {");
    document.writeln("			width: 430px;");
    document.writeln("			height: 45px;");
    document.writeln("			position: absolute;");
    document.writeln("			right: 0;");
    document.writeln("			top: 55px;");
    document.writeln("		}");
    document.writeln("		#tjiao {");
    document.writeln("			width: 85px;");
    document.writeln("			height: 45px;");
    document.writeln("			background: url(//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1809041338333733685.png) no-repeat ;");
    document.writeln("			border: 0;");
    document.writeln("		}");
    document.writeln("		.nav {");
    document.writeln("			width: 100%;");
    document.writeln("			height: 50px;");
    document.writeln("			line-height: 50px;");
    document.writeln("			background: #1859b4;");
    document.writeln("		}");
    document.writeln("		.nav ul {");
    document.writeln("			width: 1200px ;");
    document.writeln("			height: 50px;");
    document.writeln("			margin: 0 auto;");
    document.writeln("		}");
    document.writeln("		.nav ul li {");
    document.writeln("			float: left;");
    document.writeln("			width: 20%;");
    document.writeln("			text-align: center;");
    document.writeln("		}");
    document.writeln("		.nav-hover {");
    document.writeln("			height: 50px;");
    document.writeln("			border-bottom: 3px solid #feb300;");
    document.writeln("		}");
    document.writeln("		.nav ul li a {");
    document.writeln("			width: 150px;");
    document.writeln("			height: 50px;");
    document.writeln("			text-align: center;");
    document.writeln("			display: inline-block;");
    document.writeln("			padding: 0 20px;");
    document.writeln("			color: white;");
    document.writeln("			font-weight: bold ;");
    document.writeln("			font-size: 17px ;");
    document.writeln("		}");
document.writeln("a#mobile_ghb{position: relative;cursor: pointer;}.mobile_lnb {background: #f3f4f8;  display:none;}.mobile_type a#mobile_ghb{width: 80px;height: 30px;position: relative;}.mobile_type .mobile_lnb {background: #f3f4f8;line-height: 35px;font-size: 3.8vw; padding-left: 10px;display: block;}");

document.writeln("/* 登录样式 begin */");
document.writeln(".head-list ul span.login{font-size: 13px;margin: 0 10px;color: #333333;cursor: pointer;}");
document.writeln("#login {position: relative;font-size: 14px;min-width:75px;}");
document.writeln(".loginItems {display: none;position: absolute;background: #fff;border-radius: 4px;padding: 13px 0;color: black;min-width: 80px;word-wrap: break-word;margin: 8px 0px;border: 1px solid #e5e5ea;left: 50%;transform: translateX(-50%);z-index: 99;}");
document.writeln(".loginItems::before {content: \'\';position: absolute;width: 0;height: 0;border: 8px solid transparent;border-bottom-color: #fff;top: -15px;left: 50%;transform: translateX(-50%);z-index: 100;}");
document.writeln(".loginItems::after {content: \'\';position: absolute;width: 0;height: 0;border: 8px solid transparent;border-bottom-color: #e5e5ea;border-top-width: 0;top: -9px;left: 50%;transform: translateX(-50%);z-index: 99;}");
document.writeln(".loginItems p {margin-bottom: 11px;}");
document.writeln("#login .loginItems p,#login .loginItems span {display: block;text-align: center;font-size: 14px;line-height: 16px;cursor: pointer;color: #333;}");
document.writeln("/* 老年版示例 */");
document.writeln("body.useOldFixed .loginItems {width: 100%;margin: 0px;}");
document.writeln("body.useOldFixed .head-column:not(.skipAutoFix){overflow: visible;}");
document.writeln(".old_type #login .loginItems {min-width: 110px;padding: 18px 0;border: 2px solid #e5e5ea;border-radius: 6px;}");
document.writeln(".old_type #login .loginItems::before {top: -14px;}");
document.writeln(".old_type #login .loginItems p {margin-bottom: 14px;}");
document.writeln(".old_type #login .loginItems p,.old_type #login .loginItems span {font-size: 18px;line-height: 22px;}");
document.writeln("/* 登录样式 end */");
    document.writeln("</style>");
    document.writeln("<div class=\"mobile_lnb\"><ul><li><a href=\"javascript:void(0)\" onclick=\"aria.oldFixedStart()\" id=\"mobile_ghb\">关怀版</a></li></ul></div>");

    document.writeln("<div class=\"top\">");
    document.writeln("    <div class=\"head-column\" style=\"background: url(//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1809041339545683794.png) center center no-repeat;\" >");
    document.writeln("        <img src=\"//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1901250924526991372.png\"");
    document.writeln("            alt=\"\" style=\"margin-top:30px;\">");
    document.writeln("        <div class=\"head-list\">");
    document.writeln("            <ul>");
	document.writeln("<li><a target=\"_blank\"  href=\"//www.zjzwfw.gov.cn/jfaqfront_robot/index.html?webid=1\" id=\"znzxtoplink\">智能咨询</a></li>");
document.writeln("<li><a href=\"javascript:;\" onclick=\"aria.start()\">阅读辅助</a></li>");
document.writeln("<li><a href=\"javascript:;\" onclick=\"aria.oldFixedStart()\" clickhide=\"false\" openText=\"进入关怀版\" closeText=\"退出关怀版\" style=\"cursor: pointer;\" id=\"cniil_slb\">进入关怀版</a></li>");
 
  document.writeln("                <li>");
    document.writeln("                    <a href=\"/col/col1552973/index.html\" target=\"_blank\">English</a>");
    document.writeln("                </li>");

    document.writeln("                <li>");
    document.writeln("                    <a href=\"https://weibo.com/zjsjyt?is_hot=1\" target=\"_blank\">教育之江微博</a>");
   document.writeln("            <img class=\"jyzjwb\" src=\"//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1809141448589637101.png\"");
    document.writeln("                alt=\"新浪微博\" srcset=\"\" style=\"top: 25px;right: 10px;position: absolute; z-index: 999;display: none;\">");
    document.writeln("                </li>");
    document.writeln("                <li>");
    document.writeln("                    <a style=\"cursor: pointer;\" target=\"_blank\">教育之江微信</a>");
  document.writeln("            <img class=\"jyzjwx\" src=\"//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/picture/0/1809141448589945206.png\"");
    document.writeln("                alt=\"微信\" srcset=\"\" style=\"top: 25px; right: 10px;position: absolute;z-index: 999;display: none;\">");
    document.writeln("                </li>");
    document.writeln(" <li><div class=\"header_list_last text-tag\" href=\"javascript:;\" id=\"login\"><span class=\"login\" >登录</span></li>");
    document.writeln("            </ul>");

document.writeln("<script src=\"//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3096/site/script/1775/2404181647244146.js\"></script>");
    document.writeln("            <script>");
    document.writeln(" $('.head-list ul li').hover(function() {$('.head-list .jyzjwb').hide();$('.head-list .jyzjwx').hide();})");
    document.writeln(" $('.head-list ul li').eq(4).hover(");
    document.writeln(" function() {$('.head-list .jyzjwb').show()},function() {$('.head-list .jyzjwx').hide()})");
    document.writeln(" $('.head-list ul li').eq(5).hover(function() {$('.head-list .jyzjwx').show()},function() {$('.head-list .jyzjwb').hide()} )");
    document.writeln("                        </script>");
    document.writeln("        </div>");
    document.writeln("");
    document.writeln("");
    document.writeln("        <div class=\"cearch\">");
    document.writeln("            <form id=\"search-form\" name=\"search-form\"  action=\"//search.zj.gov.cn/jrobotfront/search.do\" method=\"get\" target=\"_blank\">");
    document.writeln("                <input  id=\"websiteid\"  name=\"websiteid\" type=\"hidden\" value=\"331200000000007\">");
    
    
    document.writeln(" <input id=\"sortType\" name=\"sortType\" type=\"hidden\" value=\"2\"><input id=\"tpl\" name=\"tpl\" type=\"hidden\" value=\"2330\">");
    document.writeln("                <input id=\"category\" name=\"category\" type=\"hidden\" value=\"\">");
    document.writeln("                <input id=\"q\" name=\"q\" style=\"width:334px;height: 45px;line-height:40px;padding-left:10px; border: 1px solid #c9c6c6; border-radius: 5px 0 0 5px; border-right: none; float: left; outline: none;\"");
    document.writeln("                    type=\"text\" onclick=\"if(this.value==\'请输入关键字\'){this.value=\'\';this.focus();}\" onblur=\"if(this.value==\'\'){this.value=\'请输入关键字\'}\"");
    document.writeln("                    onfocus=\"if(this.value==\'请输入关键字\'){this.value=\'\'}\" value=\"请输入关键字\"  onchange=\"changeqt(this.value)\">");
    
    document.writeln("                <input type=\"submit\" id=\"tjiao\" value=\" \" style=\"outline: none;\">");
    document.writeln("            </form>");
    document.writeln("        </div>");
    document.writeln("    </div>");
    document.writeln("");
    
    
    
    document.writeln("    <div class=\"nav\">");
    
    document.writeln("<div id=\"container\">");
    
    document.writeln("        <ul>");
    document.writeln("            <li>");
    document.writeln("                <a href=\"/\"  >首页</a>");
    document.writeln("            </li>");
    document.writeln("            <li>");
    document.writeln("                <a href=\"/col/col1532762/index.html\" >教育机构</a>");
    document.writeln("            </li>");
    document.writeln("            <li>");
    document.writeln("                <a href=\"/col/col1532802/index.html\">政府信息公开</a>");
    document.writeln("            </li>");
    document.writeln("            <li>");
    document.writeln("                <a target=\"_blank\" href=\"//www.zjzwfw.gov.cn/zjservice/dept/deptQuery.do?deptId=001003004&webId=1\" >政务服务</a>");
    document.writeln("            </li>");
    document.writeln("            <li>");
    document.writeln("                <a href=\"/col/col1532768/index.html\" >互动交流</a>");
    document.writeln("            </li>");
    document.writeln("        </ul>");
    
    
    
    
    document.writeln("    </div>");
    
    
    document.writeln("</div>");
    document.writeln("</div>");
    $(function() {
      // 判断检索"请输入关键词"
      $('#tjiao').click(function(){if($('#q').val()=='请输入关键字')$('#q').val('')})
    });
    document.writeln("<script src=\'https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3099/site/script/0/2208251035305049.js\'></script>");
    
    
 
    
        $(document).ready(function() {
        // 当前位置去掉table
        var currentA = '当前位置:'
        console.log(123)
        $('.current-content').find('a').map(function(index) {
            if (index > 0) {
                currentA += ' > ' + $(this)[0].outerHTML
            } else {
                currentA += $(this)[0].outerHTML
            }
        })
        $('.current-content').html(currentA)
    })    

    document.writeln("    <style>");
document.writeln("       .current-content{");
document.writeln("          background:none;");
document.writeln("      }  ");
document.writeln("      .mobile_type .current-content{");
document.writeln("          background:none;height:auto !important;width:100%;");
document.writeln("      }  ");
document.writeln("      .mobile_type .current-position{");
document.writeln("         height:auto !important;width:100%;");
document.writeln("      }  ");

document.writeln("      .mobile_type .xxgk{");
document.writeln("         width:100% !important;");
document.writeln("      }  ");
document.writeln("    </style>");