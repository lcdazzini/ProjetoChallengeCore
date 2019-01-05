using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using ProjetoChallengeCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ProjetoChallengeCore.Services
{
    internal class DomainsdbAPIService
    {
        public string BaseUrl
        {
            get
            {
                return "https://api.domainsdb.info/search?query=google&tld=com";
            }
        }

        public List<Domain> GetDomain()
        {
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, BaseUrl);
            HttpResponseMessage response = HttpInstance.HttpInstance.GetHttpClientInstance().SendAsync(request).Result;

            List<Domain> domainList = new List<Domain>();

            JArray domainJson = (JArray)JObject.Parse(response.Content.ReadAsStringAsync().Result)["domains"];
            var i = 0;

            foreach (var item in domainJson)
            {
                domainList.Add(new Domain() { DomainName = domainJson[i]["domain"].ToString() });
                i++;
            }

            return domainList;
        }
    }
}