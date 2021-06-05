package com.yuanshenwiki.yuanshenwiki.controller;

import com.yuanshenwiki.yuanshenwiki.bean.Chara;
import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.bean.Weapon;
import com.yuanshenwiki.yuanshenwiki.service.CharaService;
import com.yuanshenwiki.yuanshenwiki.service.UserService;
import com.yuanshenwiki.yuanshenwiki.service.WeaponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Date;
import java.util.List;

@RestController
public class RouterController {
    @Autowired
    UserService userService;
    @Autowired
    CharaService charaService;
    @Autowired
    WeaponService weaponService;
    @GetMapping("")
    public void index(HttpServletResponse response) throws IOException {
        response.sendRedirect("/mainpage");
    }
    @GetMapping("/calculator")
    public ModelAndView calculator(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("calculator");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/common")
    public ModelAndView common(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("common");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/Encyclopedia")
    public ModelAndView encylopedia(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("Encyclopedia");
            mav.addObject("stars5w",weaponService.get5Stars());
            mav.addObject("stars4w",weaponService.get4Stars());
            mav.addObject("stars5",charaService.get5Stars());
            mav.addObject("stars4",charaService.get4Stars());
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/gacha")
    public ModelAndView gacha(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("gacha");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/mainpage")
    public ModelAndView mainpage(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("mainpage");
            mav.addObject("stars5w",weaponService.get5Stars());
            mav.addObject("stars4w",weaponService.get4Stars());
            mav.addObject("stars5",charaService.get5Stars());
            mav.addObject("stars4",charaService.get4Stars());
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/news")
    public ModelAndView news(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("news");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/chara")
    public ModelAndView chara(HttpServletRequest request, HttpServletResponse response){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            Integer id=-1;
            try {
                id = Integer.valueOf(request.getParameter("id"));
            }catch (Exception e){

            }
            Chara chara=charaService.getCharaByID(id);
            if(chara.getName()==null)mav.setViewName("noresult");
            else {
                mav.setViewName("/encyclopedia/chara");
                mav.addObject("loginUser", loginUser);
                mav.addObject("chara",chara);
            }
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/download")
    public void Download(HttpServletRequest request,HttpServletResponse response) throws IOException {
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null) {
            String id = request.getParameter("id");
            Chara c = charaService.getCharaByID(Integer.parseInt(id));
            String path = ResourceUtils.getURL("classpath:").getPath() + "static/img/avatar";
            String realPath = path.replace('/', '\\').substring(1, path.length());
            File downFile = new File(realPath, "Chara" + id + ".txt");
            if (!downFile.exists()) {
                downFile.createNewFile();
            }
            BufferedWriter br = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(downFile)));
            br.write("名字:" + c.getName());
            br.newLine();
            br.write("稀有度:" + c.getRarity());
            br.newLine();
            br.write("武器类型:" + c.getWeaponclass());
            br.newLine();
            br.write("命之座:" + c.getElement());
            br.newLine();
            br.write("性别:" + c.getSex());
            br.newLine();
            br.write("所属:" + c.getNation());
            br.newLine();
            br.write("90生命值:" + c.getHP());
            br.newLine();
            br.write("90攻击力:" + c.getDamage());
            br.newLine();
            br.write("90防御值:" + c.getArmor());
            br.newLine();
            br.write("突破成长:" + c.getGrowth());
            br.newLine();
            br.write("标签:" + c.getTags());
            br.close();
            response.setHeader("content-disposition", "attachment;filename=" + (new Date().hashCode()) + ".txt");
            byte buffer[] = new byte[1024];
            int len = 1024, saveLen = len;
            InputStream is = new FileInputStream(downFile);
            OutputStream os = response.getOutputStream();
            while ((len = is.read(buffer, 0, len)) > 0) {
                os.write(buffer, 0, saveLen);
                saveLen = len;
            }
            is.close();
            os.close();
        }
    }

    @GetMapping("/downloadweapon")
    public void DownloadWeapon(HttpServletRequest request,HttpServletResponse response) throws IOException {
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null) {
            String id = request.getParameter("id");
            Weapon c = weaponService.getWeaponByID(Integer.parseInt(id));
            String path = ResourceUtils.getURL("classpath:").getPath() + "static/img/avatar";
            String realPath = path.replace('/', '\\').substring(1, path.length());
            File downFile = new File(realPath, "Weapon" + id + ".txt");
            if (!downFile.exists()) {
                downFile.createNewFile();
            }
            BufferedWriter br = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(downFile)));
            br.write("名字:" + c.getName());
            br.newLine();
            br.write("稀有度:" + c.getRarity());
            br.newLine();
            br.write("类型:" + c.getType());
            br.newLine();
            br.write("获取方式:" + c.getAccess());
            br.newLine();
            br.write("基础属性1:" + c.getBasic_attribute1());
            br.newLine();
            br.write("基础属性2:" + c.getBasic_attribute2());
            br.newLine();
            br.write("攻击力:" + c.getAtk());
            br.newLine();
            br.write("副属性:" + c.getSec_attribute());
            br.newLine();
            br.write("技能:" + c.getSkill());
            br.close();
            response.setHeader("content-disposition", "attachment;filename=" + (new Date().hashCode()) + ".txt");
            byte buffer[] = new byte[1024];
            int len = 1024, saveLen = len;
            InputStream is = new FileInputStream(downFile);
            OutputStream os = response.getOutputStream();
            while ((len = is.read(buffer, 0, len)) > 0) {
                os.write(buffer, 0, saveLen);
                saveLen = len;
            }
            is.close();
            os.close();
        }
    }


    @GetMapping("/search")
    public ModelAndView Search(HttpServletRequest request,HttpServletResponse response){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        String key=request.getParameter("key");
        if(loginUser!=null){
            mav.setViewName("search");
            mav.addObject("loginUser",loginUser);
            List<Chara> result=charaService.search(key);
            mav.addObject("result",result);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }

    @GetMapping("/weapon")
    public ModelAndView weapon(HttpServletRequest request, HttpServletResponse response){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            Integer id=-1;
            try {
                id = Integer.valueOf(request.getParameter("id"));
            }catch (Exception e){

            }
            Weapon w=weaponService.getWeaponByID(id);
            if(w.getName()==null)mav.setViewName("noresult");
            else {
                mav.setViewName("/encyclopedia/weapon");
                mav.addObject("loginUser", loginUser);
                mav.addObject("weapon",w);
            }
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/calendar")
    public ModelAndView calendar(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("calendar");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
}
