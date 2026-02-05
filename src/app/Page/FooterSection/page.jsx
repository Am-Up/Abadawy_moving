'use client';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from "react-i18next";
import { logo } from "@/assets/indxe.js";
export default function FooterSection() {

    const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-[1200px] ">
        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="text-center md:text-start md:w-3/12 ">
        
          <div className="flex w-full justify-center md:justify-start">
              <Image
              src={logo}
              alt="Albadawy Moves Logo"
                className="mx-auto mb-4 w-32 h-auto"
            />
          </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
             {t('footer.companyDescription')}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button variant="outline" size="sm" className="border-gray-600 rounded-[4px] text-gray-300 hover:bg-blue-600 hover:border-blue-600">
                <FacebookIcon className="w-4 h-4" />
              </button>
              <button variant="outline" size="sm" className="border-gray-600 rounded-[4px] text-gray-300 hover:bg-blue-400 hover:border-blue-400">
                <TwitterIcon className="w-4 h-4" />
              </button>
              <button variant="outline" size="sm" className="border-gray-600 rounded-[4px] text-gray-300 hover:bg-pink-600 hover:border-pink-600">
                <InstagramIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-start md:w-3/12">
            <h3 className="text-xl font-bold mb-4">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li> {t('footer.services.moving')} </li>
              <li> {t('footer.services.ac')} </li>
              <li> {t('footer.services.bedroom')} </li>
              <li> {t('footer.services.kitchen')} </li>
              <li> {t('footer.services.cleaning')} </li>
              <li> {t('footer.services.packing')} </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-start md:w-3/12  ">
            <h3 className="text-xl font-bold mb-4">{t('footer.contactTitle')}</h3>
            <div className="space-y-3 text-gray-300 flex flex-col justify-center md:justify-start items-center md:items-start">
              <div className="flex gap-3">
                <PhoneIcon className="w-5 h-5 " />
                <span>0501234567</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationOnIcon className="w-5 h-5 " />
                <span>{t('footer.contactLocation')}</span>
              </div>
              <div className="flex items-center gap-3">
                <AccessTimeIcon className="w-5 h-5" />
                <span> {t('footer.contactHours')} </span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center md:text-start md:w-3/12">
            <h3 className="text-xl font-bold mb-4"> {t('footer.contactTitle')} </h3>
            <p className="text-gray-300 mb-4">
             {t('footer.ctaText')}
            </p>
            

            <a href="https://wa.me/+966545268787" className="bg-green-600 hover:bg-green-700 text-emerald-100 w-full flex items-center justify-center gap-2 py-2 rounded-xl"> {t('footer.ctaWhatsApp')} <ChatIcon/></a>
            <div className="mt-4 text-sm text-gray-400">
                {t('footer.ctaResponseTime')}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}